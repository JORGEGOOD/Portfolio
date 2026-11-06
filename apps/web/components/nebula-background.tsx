"use client"

import { useEffect, useRef } from "react"

type Props = {
  cloudColor?: string
  highlightColor?: string
  density?: number
  scale?: number
  stars?: number
  quality?: number
  className?: string
}

const VERT = `
attribute vec2 p;
void main() { gl_Position = vec4(p, 0.0, 1.0); }
`

const FRAG = `
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform float uPR;
uniform float uDensity;
uniform float uScale;
uniform float uStars;
uniform vec3 uCloud;
uniform vec3 uHighlight;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float valueNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 w = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(a, b, w.x) + (c - a) * w.y * (1.0 - w.x) + (d - b) * w.x * w.y;
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  float fr = 1.0;
  for (int i = 0; i < 6; i++) {
    v += a * valueNoise(p * fr);
    a *= 0.5;
    fr *= 2.0;
  }
  return v;
}

float starLayer(vec2 p) {
  vec2 grid = floor(p * 200.0);
  float lit = hash(grid);
  if (lit < 0.95) return 0.0;
  vec2 center = vec2(hash(grid + vec2(1.0)), hash(grid + vec2(2.0)));
  float dist = length(fract(p * 200.0) - center);
  float tw = sin(uTime * 3.0 + hash(grid + vec2(3.0)) * 6.2832) * 0.5 + 0.5;
  return (1.0 - smoothstep(0.0, 0.1, dist)) * tw;
}

void main() {
  vec2 uv = (2.0 * gl_FragCoord.xy - uRes) / uRes.y;
  float time = uTime * 0.1;

  vec2 cuv = (uv + vec2(time * 0.3, time * 0.2)) * uScale;
  float c1 = fbm(cuv * 2.0);
  float c2 = fbm(cuv * 4.0 + vec2(1000.0));
  float c3 = fbm(cuv * 8.0 + vec2(2000.0));
  float clouds = pow(c1 * 0.5 + c2 * 0.3 + c3 * 0.2, max(2.0 - uDensity, 0.1));

  vec3 nebula = mix(uCloud * 0.3, uCloud * 1.2, clouds);
  nebula = mix(nebula, uHighlight, clouds * clouds * 0.3);

  vec2 css = (floor(gl_FragCoord.xy / uPR) + 0.5) * uPR;
  vec2 suv = (2.0 * css - uRes) / uRes.y;
  float sf = (starLayer(suv) + starLayer(suv * 0.5) * 0.8) * uStars;

  vec3 color = nebula * clouds + vec3(1.0, 0.9, 0.8) * sf;
  color += uCloud * exp(-length(uv) * 0.8) * 0.1;
  color *= sin(time * 0.5) * 0.1 + 0.9;
  color = pow(max(color, vec3(0.0)), vec3(0.8));
  gl_FragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
}
`

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "")
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h
  const n = parseInt(full, 16)
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255]
}

export function NebulaBackground({
  cloudColor = "#8a8a8a",
  highlightColor = "#e5e5e5",
  density = 1,
  scale = 1,
  stars = 1,
  quality = 1,
  className = "fixed inset-0 -z-10",
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const gl = canvas.getContext("webgl", { antialias: false, alpha: false })
    if (!gl) return

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)
      if (!s) return null
      gl.shaderSource(s, src)
      gl.compileShader(s)
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(s))
        return null
      }
      return s
    }

    const vs = compile(gl.VERTEX_SHADER, VERT)
    const fs = compile(gl.FRAGMENT_SHADER, FRAG)
    const prog = gl.createProgram()
    if (!vs || !fs || !prog) return
    gl.attachShader(prog, vs)
    gl.attachShader(prog, fs)
    gl.linkProgram(prog)
    gl.useProgram(prog)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
    const loc = gl.getAttribLocation(prog, "p")
    gl.enableVertexAttribArray(loc)
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)

    const u = (name: string) => gl.getUniformLocation(prog, name)
    const uRes = u("uRes"), uTime = u("uTime"), uPR = u("uPR")
    const uDensity = u("uDensity"), uScale = u("uScale"), uStars = u("uStars")
    const uCloud = u("uCloud"), uHighlight = u("uHighlight")

    let pr = 1
    const resize = () => {
      pr = Math.min(window.devicePixelRatio || 1, 2) * quality
      canvas.width = Math.max(1, Math.floor(canvas.clientWidth * pr))
      canvas.height = Math.max(1, Math.floor(canvas.clientHeight * pr))
      gl.viewport(0, 0, canvas.width, canvas.height)
    }

    const draw = (t: number) => {
      gl.uniform2f(uRes, canvas.width, canvas.height)
      gl.uniform1f(uTime, t)
      gl.uniform1f(uPR, pr)
      gl.uniform1f(uDensity, density)
      gl.uniform1f(uScale, scale)
      gl.uniform1f(uStars, stars)
      gl.uniform3fv(uCloud, hexToRgb(cloudColor))
      gl.uniform3fv(uHighlight, hexToRgb(highlightColor))
      gl.drawArrays(gl.TRIANGLES, 0, 3)
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const start = performance.now()
    let raf = 0
    const loop = () => {
      draw((performance.now() - start) / 1000)
      raf = requestAnimationFrame(loop)
    }
    const onVisibility = () => {
      cancelAnimationFrame(raf)
      if (!document.hidden && !reduce) loop()
    }

    resize()
    if (reduce) draw(2.5)
    else loop()

    const ro = new ResizeObserver(() => {
      resize()
      if (reduce) draw(2.5)
    })
    ro.observe(canvas)
    document.addEventListener("visibilitychange", onVisibility)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      document.removeEventListener("visibilitychange", onVisibility)
    }
  }, [cloudColor, highlightColor, density, scale, stars, quality])

  return (
    <div
      aria-hidden
      className={`pointer-events-none ${className}`}
      style={{
        background: `radial-gradient(40% 50% at 25% 30%, color-mix(in srgb, ${cloudColor} 45%, black), transparent 70%), #0a0a0a`,
      }}
    >
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  )
}