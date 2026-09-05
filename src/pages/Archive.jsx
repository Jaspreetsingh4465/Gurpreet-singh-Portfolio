import { useMemo } from "react"
import { useSearchParams } from "react-router"
import { Seo } from "../components/site/Seo"
import { PageHero } from "../components/editorial/PageHero"
import { ArchiveGrid } from "../components/editorial/ArchiveGrid"
import { Reveal } from "../components/ui/reveal"
import { archiveFilters, archiveItems } from "../content/archive"

/**
 * The archive. The active filter lives in the URL (?view=…) so a filtered
 * wall can be linked to and the back button behaves.
 */
export const Archive = () => {
  const [params, setParams] = useSearchParams()
  const active = archiveFilters.some((f) => f.key === params.get("view")) ? params.get("view") : "all"
  const items = useMemo(
    () => (active === "all" ? archiveItems : archiveItems.filter((i) => i.tags.includes(active))),
    [active],
  )
  const select = (key) => setParams(key === "all" ? {} : { view: key }, { replace: false })

  return (
    <>
      <Seo title="Archive" description="A visual record of people, places, history, photography, cultural life, paintings, events and memory." path="/archive" image="/gallery/opt/2-1600.webp" />
      <PageHero eyebrow="The archive" title="A visual record of people, places and memory." lead="Paintings, photographs, events and encounters, kept together as one growing archive rather than a gallery of finished work." />

      <section className="bg-charcoal">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 lg:px-8">
          <Reveal>
            <div role="group" aria-label="Filter the archive" className="flex flex-wrap gap-x-7 gap-y-3 border-b border-ivory/12 pb-6">
              {archiveFilters.map((f) => {
                const on = f.key === active
                return (
                  <button
                    key={f.key}
                    type="button"
                    onClick={() => select(f.key)}
                    aria-pressed={on}
                    className={`relative py-1 text-[12px] tracking-[0.16em] uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-light ${
                      on ? "text-gold-light" : "text-ivory/50 hover:text-ivory"
                    }`}
                  >
                    {f.label}
                    <span className={`absolute -bottom-0.5 left-0 h-px bg-gold-light transition-[width] duration-300 ${on ? "w-full" : "w-0"}`} aria-hidden="true" />
                  </button>
                )
              })}
            </div>
          </Reveal>

          <p className="mt-6 font-mono text-[12px] text-ivory/40" aria-live="polite">
            {items.length} {items.length === 1 ? "item" : "items"}
          </p>

          <div className="mt-10">
            <ArchiveGrid items={items} />
          </div>
        </div>
      </section>
    </>
  )
}
