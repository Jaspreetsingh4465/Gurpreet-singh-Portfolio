import { Link } from "react-router"
import { ArrowRight } from "@phosphor-icons/react"
import { RevealImage, Reveal } from "../ui/reveal"
import { Photo } from "../ui/photo"

/**
 * Categories with rhythm: the first spans two columns, the rest fall into a
 * three-column run. Captions sit under the frame. `linkBase` turns each into
 * a route; without it they are plain figures.
 */
/**
 * `lead` makes the first item span two columns. Only use it when the count
 * fills the grid: 8 items (1 lead + 1, then 3, then 3) does; 6 does not.
 */
export const CategoryGrid = ({ categories, linkBase, tone = "dark", counts, lead: withLead = true }) => {
  const light = tone === "light"
  return (
    <ul className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((c, i) => {
        const lead = withLead && i === 0
        const body = (
          <>
            <RevealImage delay={(i % 3) * 0.07} className={lead ? "aspect-[16/9]" : "aspect-[4/5]"}>
              <Photo
                id={c.photo.id}
                alt={c.photo.alt}
                width={lead ? 1600 : 700}
                sizes={lead ? "(max-width: 1024px) 100vw, 760px" : "(max-width: 640px) 100vw, 360px"}
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
              />
            </RevealImage>
            <Reveal delay={(i % 3) * 0.07 + 0.1}>
              <div className="mt-6 flex items-start justify-between gap-4">
                <div>
                  <h3 className={`display text-[1.6rem] leading-tight ${light ? "text-charcoal" : "text-ivory"}`}>{c.title}</h3>
                  <p className={`mt-3 max-w-[40ch] text-[15.5px] leading-[1.7] ${light ? "text-charcoal/60" : "text-ivory/60"}`}>{c.desc}</p>
                  {counts && counts[c.slug] != null && (
                    <p className={`mt-3 font-mono text-[12px] ${light ? "text-gold" : "text-gold-light"}`}>{counts[c.slug]} works</p>
                  )}
                </div>
                {linkBase && (
                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                    className={`mt-2 shrink-0 transition-all duration-300 group-hover:translate-x-1 ${light ? "text-charcoal/30 group-hover:text-gold" : "text-ivory/30 group-hover:text-gold-light"}`}
                  />
                )}
              </div>
            </Reveal>
          </>
        )
        return (
          <li key={c.slug} className={lead ? "sm:col-span-2" : ""}>
            {linkBase ? (
              <Link to={`${linkBase}/${c.slug}`} className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-light">
                {body}
              </Link>
            ) : (
              <div className="group">{body}</div>
            )}
          </li>
        )
      })}
    </ul>
  )
}
