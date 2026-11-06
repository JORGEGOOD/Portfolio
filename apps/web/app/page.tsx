import { ArrowUpRight, Download, Mail } from "lucide-react"
import { Badge } from "@workspace/ui/components/badge"
import { buttonVariants } from "@workspace/ui/components/button"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"
import { cn } from "@workspace/ui/lib/utils"
import { NebulaBackground } from "@/components/nebula-background"
import { Reveal } from "@/components/reveal"
import { Marquee } from "@/components/marquee"
import { SpotlightCard } from "@/components/spotlight-card"
import {
  profile, about, services, education, experience, skills,
  softSkills, languages, projects, marquee,
} from "@/data/portfolio"

const display = "font-[family-name:var(--font-display)]"
const mono = "font-[family-name:var(--font-geist-mono)]"

function Section({
  id, index, label, title, children,
}: {
  id: string
  index: string
  label: string
  title: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-20 py-24 sm:py-32">
      <Reveal>
        <p className={cn(mono, "mb-5 text-sm uppercase tracking-[0.25em] text-muted-foreground")}>
          {index} — {label}
        </p>
        <h2 className={cn(display, "mb-14 max-w-3xl text-5xl leading-[1.02] sm:text-7xl")}>
          {title}
        </h2>
      </Reveal>
      {children}
    </section>
  )
}

export default function Page() {
  return (
    <div className="dark min-h-svh text-lg text-foreground">
      <NebulaBackground
        cloudColor="#6e6e6e"
        highlightColor="#ffffff"
        density={0.6}
        stars={1.4}
        quality={0.6}
      />
      <div className="fixed inset-0 -z-10 bg-black/40" aria-hidden />

      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#" className={cn(display, "text-2xl transition-opacity hover:opacity-70")}>
            {profile.name}
          </a>
          <div className="flex items-center gap-8">
            <div className="hidden gap-8 text-base text-muted-foreground md:flex">
              <a href="#sobre-mi" className="transition-colors hover:text-foreground">Sobre mí</a>
              <a href="#experiencia" className="transition-colors hover:text-foreground">Experiencia</a>
              <a href="#proyectos" className="transition-colors hover:text-foreground">Proyectos</a>
              <a href="#skills" className="transition-colors hover:text-foreground">Skills</a>
            </div>
            <a
              href={profile.cv}
              download
              className={cn(buttonVariants({ size: "default" }), "rounded-full")}
            >
              <Download className="size-4" /> CV
            </a>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        {/* HERO */}
        <section className="flex min-h-[calc(100svh-4rem)] flex-col justify-center py-20">
          <Reveal>
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-base backdrop-blur">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-white/70" />
                <span className="relative inline-flex size-2.5 rounded-full bg-white" />
              </span>
              Abierto a oportunidades · {profile.location}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className={cn(display, "text-7xl leading-[0.95] tracking-tight sm:text-9xl")}>
              Jorge <em className="italic text-muted-foreground">Cayambe</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-2xl text-foreground sm:text-3xl">{profile.role}</p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground">
              Programo en C# y Python, trabajo con bases de datos y construyo
              automatizaciones con IA. Actualmente cursando dos másteres en Datos e IA.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#proyectos" className={cn(buttonVariants({ size: "lg" }), "h-12 rounded-full px-7 text-base")}>
                Ver proyectos <ArrowUpRight className="size-4" />
              </a>
              <a
                href={profile.cv}
                download
                className={cn(buttonVariants({ size: "lg", variant: "outline" }), "h-12 rounded-full px-7 text-base")}
              >
                <Download className="size-4" /> Descargar CV
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ size: "lg", variant: "ghost" }), "h-12 rounded-full px-7 text-base")}
              >
                GitHub
              </a>
            </div>
          </Reveal>
        </section>

        <Marquee items={marquee} />

        {/* SOBRE MÍ */}
        <Section
          id="sobre-mi"
          index="01"
          label="Sobre mí"
          title={<>Quién <em className="italic text-muted-foreground">soy</em></>}
        >
          <div className="grid gap-14 lg:grid-cols-5">
            <div className="space-y-6 text-xl leading-relaxed text-muted-foreground lg:col-span-3">
              {about.map((p, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <p className={i === 0 ? "text-2xl text-foreground" : ""}>{p}</p>
                </Reveal>
              ))}
            </div>
            <div className="grid gap-4 lg:col-span-2">
              {services.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.1}>
                  <SpotlightCard>
                    <CardHeader>
                      <CardTitle className="text-xl">{s.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">{s.text}</CardDescription>
                    </CardHeader>
                  </SpotlightCard>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>

        {/* FORMACIÓN */}
        <Section
          id="formacion"
          index="02"
          label="Formación"
          title={<>Dónde <em className="italic text-muted-foreground">aprendo</em></>}
        >
          <div className="grid gap-5 md:grid-cols-3">
            {education.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.1}>
                <SpotlightCard>
                  <CardHeader className="gap-3">
                    <CardDescription className={cn(mono, "text-sm uppercase tracking-wider")}>
                      {e.period}
                    </CardDescription>
                    <CardTitle className="text-2xl leading-snug">{e.title}</CardTitle>
                    <CardDescription className="text-base">{e.place}</CardDescription>
                  </CardHeader>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* EXPERIENCIA */}
        <Section
          id="experiencia"
          index="03"
          label="Experiencia"
          title={<>Lo que <em className="italic text-muted-foreground">he hecho</em></>}
        >
          {experience.map((x) => (
            <Reveal key={x.company}>
              <SpotlightCard>
                <CardHeader className="gap-3">
                  <CardDescription className={cn(mono, "text-sm uppercase tracking-wider")}>
                    {x.period} · {x.place}
                  </CardDescription>
                  <CardTitle className="text-3xl">
                    {x.role} <span className="text-muted-foreground">— {x.company}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3 text-lg leading-relaxed text-muted-foreground">
                    {x.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span className="mt-3 size-1.5 shrink-0 rounded-full bg-white/60" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {x.tech.map((t) => (
                      <Badge key={t} variant="outline" className="h-auto px-3 py-1 text-sm">{t}</Badge>
                    ))}
                  </div>
                </CardContent>
              </SpotlightCard>
            </Reveal>
          ))}
        </Section>

        {/* PROYECTOS */}
        <Section
          id="proyectos"
          index="04"
          label="Proyectos"
          title={<>Cosas que <em className="italic text-muted-foreground">construyo</em></>}
        >
          <Reveal>
            <Tabs defaultValue={projects[0]?.id}>
              <TabsList className="mb-6 flex-wrap justify-start gap-1 rounded-full border border-white/10 bg-black/40 p-1.5 group-data-horizontal/tabs:h-auto">
                {projects.map((p) => (
                  <TabsTrigger key={p.id} value={p.id} className="rounded-full px-5 py-2 text-base">
                    {p.title}
                  </TabsTrigger>
                ))}
              </TabsList>

              {projects.map((p) => (
                <TabsContent
                  key={p.id}
                  value={p.id}
                  className="animate-in fade-in-0 slide-in-from-bottom-2 duration-500"
                >
                  <SpotlightCard className="gap-0 overflow-hidden py-0">
                    <div className="aspect-video w-full bg-white/5">
                      {p.media.type === "video" ? (
                        <video src={p.media.src} controls muted loop playsInline className="h-full w-full object-cover" />
                      ) : (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={p.media.src} alt={p.title} className="h-full w-full object-cover" />
                      )}
                    </div>
                    <CardHeader className="pt-6">
                      <CardTitle className="text-3xl">{p.title}</CardTitle>
                      <CardDescription className="text-lg">{p.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-5 pb-6">
                      <p className="text-lg text-muted-foreground">
                        <span className="font-medium text-foreground">¿Como Funciona? </span>
                        {p.uses}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {p.tech.map((t) => (
                          <Badge key={t} variant="outline" className="h-auto px-3 py-1 text-sm">{t}</Badge>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <a href={p.url} target="_blank" rel="noreferrer" className={cn(buttonVariants(), "rounded-full")}>
                          Ver demo <ArrowUpRight className="size-4" />
                        </a>
                        {p.repo && (
                          <a href={p.repo} target="_blank" rel="noreferrer" className={cn(buttonVariants({ variant: "outline" }), "rounded-full")}>
                            Código
                          </a>
                        )}
                      </div>
                    </CardContent>
                  </SpotlightCard>
                </TabsContent>
              ))}
            </Tabs>
          </Reveal>
        </Section>

        {/* SKILLS */}
        <Section
          id="skills"
          index="05"
          label="Skills"
          title={<>Mi <em className="italic text-muted-foreground">stack</em></>}
        >
          <div className="grid gap-10 sm:grid-cols-2">
            {Object.entries(skills).map(([group, items], i) => (
              <Reveal key={group} delay={i * 0.06}>
                <h3 className={cn(mono, "mb-4 text-sm uppercase tracking-[0.2em] text-muted-foreground")}>
                  {group}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <Badge key={s} variant="outline" className="h-auto px-3.5 py-1.5 text-base">{s}</Badge>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <h3 className={cn(display, "mb-8 mt-24 text-4xl sm:text-5xl")}>
              Soft <em className="italic text-muted-foreground">skills</em>
            </h3>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {softSkills.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <SpotlightCard>
                  <CardHeader className="gap-2">
                    <CardTitle className="text-xl">{s.title}</CardTitle>
                    <CardDescription className={cn(mono, "text-xs uppercase tracking-wider")}>
                      {s.from}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-base leading-relaxed text-muted-foreground">
                    {s.text}
                  </CardContent>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <h3 className={cn(display, "mb-6 mt-24 text-4xl sm:text-5xl")}>
              <em className="italic text-muted-foreground">Idiomas</em>
            </h3>
            <div className="flex flex-wrap gap-3">
              {languages.map((l) => (
                <Badge key={l.name} variant="outline" className="h-auto px-4 py-2 text-base">
                  {l.name} · {l.level}
                </Badge>
              ))}
            </div>
          </Reveal>
        </Section>

        {/* CONTACTO */}
        <section id="contacto" className="scroll-mt-20 py-24 text-center sm:py-32">
          <Reveal>
            <p className={cn(mono, "mb-5 text-sm uppercase tracking-[0.25em] text-muted-foreground")}>
              06 — Contacto
            </p>
            <h2 className={cn(display, "mx-auto max-w-4xl text-6xl leading-[1] sm:text-8xl")}>
              ¿Como  <em className="italic text-muted-foreground">contactarme </em>?
            </h2>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className={cn(buttonVariants({ size: "lg" }), "h-12 rounded-full px-7 text-base")}
              >
                <Mail className="size-4" /> {profile.email}
              </a>
              <a
                href={profile.cv}
                download
                className={cn(buttonVariants({ size: "lg", variant: "outline" }), "h-12 rounded-full px-7 text-base")}
              >
                <Download className="size-4" /> Descargar CV
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </div>
  )
}