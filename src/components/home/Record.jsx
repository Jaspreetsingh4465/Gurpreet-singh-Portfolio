import { Link } from "react-router"
import { ArrowRight } from "@phosphor-icons/react"
import { Reveal } from "../ui/reveal"
import { soloExhibitions, awards } from "../../content/record"

/**
 * A short record on the home page: one line per solo-exhibition country and
 * the four most recent honours, each column linking to its full page.
 */
const Column = ({ heading, items, to, linkLabel, delay = 0 }) => (
  <Reveal delay={delay}>
    <h2 className="display text-[clamp(2rem,3.2vw,2.6rem)] leading-tight text-charcoal">{heading}</h2>
    <ol className="mt-10 space-y-8">
      {items.map(({ year, title, where }) => (
        <li key={year + title} className="grid grid-cols-[4.5rem_1fr] gap-6">
          <span className="font-mono pt-0.5 text-[14px] text-gold">{year}</span>
          <span>
            <span className="block text-[17px] leading-snug text-charcoal">{title}</span>
            {where && <span className="mt-1 block text-[15px] text-charcoal/55">{where}</span>}
          </span>
        </li>
      ))}
    </ol>
    <Link
      to={to}
      className="group mt-10 inline-flex items-center gap-3 text-[12px] tracking-[0.18em] text-gold uppercase transition-colors hover:text-charcoal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
    >
      {linkLabel}
      <ArrowRight size={14} weight="bold" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  </Reveal>
)

export const Record = () => {
  // Solo shows, one line per country, newest first.
  const shows = [...soloExhibitions]
    .map((g) => {
      const year = g.year ?? g.venues[g.venues.length - 1].year
      const where = g.venues.map((v) => v.venue).join("; ")
      return { year, title: `Solo exhibitions, ${g.country}`, where }
    })
    .sort((a, b) => b.year.localeCompare(a.year))
  const honours = awards
    .filter((a) => a.year && /^\d{4}$/.test(a.year))
    .sort((a, b) => b.year.localeCompare(a.year))
    .slice(0, 4)
    .map((a) => ({ year: a.year, title: a.title, where: a.by }))

  return (
    <section id="record" className="bg-ivory">
      <div className="mx-auto max-w-6xl border-t border-charcoal/12 px-6 py-24 md:py-32 lg:px-8">
        <div className="grid gap-16 md:grid-cols-2 md:gap-24">
          <Column heading="Solo exhibitions" items={shows} to="/exhibitions" linkLabel="Full exhibition record" />
          <Column heading="Recognition" items={honours} to="/achievements" linkLabel="All awards and honours" delay={0.08} />
        </div>
      </div>
    </section>
  )
}
