import { Reveal } from "../ui/reveal"

/**
 * Solo exhibitions grouped by country. The country and its year stand as a
 * heading; venues sit beneath as a plain list. Museum-label restraint.
 */
export const ExhibitionTimeline = ({ groups, tone = "light" }) => {
  const light = tone === "light"
  return (
    <ol className="grid gap-x-16 gap-y-14 md:grid-cols-2">
      {groups.map((g, i) => (
        <li key={g.country} className={`border-t pt-8 ${light ? "border-charcoal/12" : "border-ivory/12"}`}>
          <Reveal delay={(i % 2) * 0.06}>
            <div className="flex items-baseline justify-between gap-6">
              <h3 className={`display text-[1.75rem] leading-none ${light ? "text-charcoal" : "text-ivory"}`}>{g.country}</h3>
              {g.year && <span className={`font-mono text-[14px] ${light ? "text-gold" : "text-gold-light"}`}>{g.year}</span>}
            </div>
            <ul className="mt-7 space-y-4">
              {g.venues.map((v) => (
                <li key={v.venue} className="grid grid-cols-[4rem_1fr] gap-4">
                  <span className={`font-mono text-[13px] ${light ? "text-gold" : "text-gold-light"}`}>{v.year ?? ""}</span>
                  <span className={`text-[16px] leading-snug ${light ? "text-charcoal/75" : "text-ivory/70"}`}>{v.venue}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </li>
      ))}
    </ol>
  )
}
