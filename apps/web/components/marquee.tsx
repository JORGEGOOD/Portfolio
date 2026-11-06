export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items]
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div className="flex w-max animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
        {row.map((t, i) => (
          <span
            key={i}
            className="mr-4 rounded-full border border-white/10 px-6 py-2.5 text-lg text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}