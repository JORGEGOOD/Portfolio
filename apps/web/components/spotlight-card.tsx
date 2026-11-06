"use client"

import { Card } from "@workspace/ui/components/card"
import { cn } from "@workspace/ui/lib/utils"

export function SpotlightCard({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className="group relative h-full rounded-xl"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`)
        e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`)
      }}
    >
      <Card
        className={cn(
          "h-full border border-white/10 bg-black/50 shadow-none ring-0 backdrop-blur-sm transition-colors duration-300 group-hover:border-white/25",
          className
        )}
      >
        {children}
      </Card>
      <div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--x) var(--y), rgba(255,255,255,0.09), transparent 45%)",
        }}
      />
    </div>
  )
}