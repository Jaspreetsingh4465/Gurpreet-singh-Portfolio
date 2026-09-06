import { Link } from "react-router"
import { ArrowRight } from "@phosphor-icons/react"
import { Reveal } from "../ui/reveal"
import { soloExhibitions, awards } from "../../content/record"
import { practice } from "../../content/site"

/**
 * One column of the record, drawn as a timeline: a hairline runs the height of
 * the list and each entry sits on a node. The dots are structural rather than
 * decorative, which is why they are the only marks of their kind in the
 * section and why they take the text colour, not the accent.
 */
const Column = ({ heading, items, to, linkLabel, delay = 0 }) => (
  <Reveal delay={delay}>
    <h2 className="display text-[clamp(1.9rem,3vw,2.5rem)] leading-tight text-charcoal">{heading}</h2>

    <ol className="mt-9">
      {items.map(({ year, title, where }, i) => (
        <li key={year + title} className="grid grid-cols-[3.5rem_1.5rem_1fr] pb-8 last:pb-0">
          <span className="pt-1 text-[12.5px] tracking-[0.08em] text-gold">{year}</span>

          <span aria-hidden="true" className="relative flex justify-center">
            <span className="mt-[0.45rem] size-[5px] shrink-0 rounded-full bg-charcoal/45" />
            {i < items.length - 1 && (
              <span className="absolute top-[0.9rem] bottom-[-2rem] w-px bg-charcoal/15" />
            )}
          </span>

          <span className="pb-1">
            <span className="block text-[16px] leading-snug text-charcoal">{title}</span>
            {where && <span className="mt-1 block max-w-[46ch] text-[14px] leading-[1.55] text-charcoal/55">{where}</span>}
          </span>
        </li>
      ))}
    </ol>

    <Link
      to={to}
      className="group mt-9 inline-flex items-center gap-3 text-[11px] tracking-[0.22em] text-gold uppercase transition-colors hover:text-charcoal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
    >
      {linkLabel}
      <ArrowRight
        size={13}
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </Link>
  </Reveal>
)

export const Record = () => {
  // Solo shows, one line per country, newest first.
  const shows = [...soloExhibitions]
    .map((g) => {
      const year = g.year ?? g.venues[g.venues.length - 1].year
      const where = g.venues.map((v) => v.venue).join("; ")
      return { year, title: `Solo exhibition, ${g.country}`, where }
    })
    .sort((a, b) => b.year.localeCompare(a.year))

  const honours = awards
    .filter((a) => a.year && /^\d{4}$/.test(a.year))
    .sort((a, b) => b.year.localeCompare(a.year))
    .slice(0, 4)
    .map((a) => ({ year: a.year, title: a.title, where: a.by }))

  return (
    <section id="record" className="bg-ivory">
      <div className="mx-auto max-w-[84rem] px-6 lg:px-8 2xl:max-w-[100rem] 2xl:px-16">
        <div className="grid gap-16 border-t border-charcoal/15 pt-16 md:grid-cols-2 md:gap-0 md:pt-20">
          <div className="md:pr-14 lg:pr-20">
            <Column heading="Solo exhibitions" items={shows} to="/exhibitions" linkLabel="Full exhibition record" />
          </div>
          <div className="border-charcoal/15 md:border-l md:pl-14 lg:pl-20">
            <Column
              heading="Recognition"
              items={honours}
              to="/achievements"
              linkLabel="All awards and honours"
              delay={0.08}
            />
          </div>
        </div>

        {/* The line that closes the light zone */}
        <div className="mt-20 flex flex-col gap-6 py-10 sm:flex-row sm:items-end sm:justify-between">
          <p className="font-script max-w-[14ch] text-[22px] leading-[1.25] text-charcoal/45">
            {practice.closing.note}
          </p>

          <div className="flex items-center gap-8">
            <span className="hidden h-px w-40 bg-charcoal/20 lg:block xl:w-72" aria-hidden="true" />
            <ul className="flex flex-wrap items-center gap-x-3 text-[10px] tracking-[0.26em] text-charcoal/45 uppercase">
              {practice.closing.words.map((w, i) => (
                <li key={w} className="flex items-center gap-3">
                  {i > 0 && (
                    <span className="text-gold/60" aria-hidden="true">
                      /
                    </span>
                  )}
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
