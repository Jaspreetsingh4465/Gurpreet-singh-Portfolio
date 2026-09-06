import { useCallback, useMemo, useRef, useState } from "react"
import { useSearchParams } from "react-router"
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"
import { ListBullets, SquaresFour } from "@phosphor-icons/react"
import { Seo } from "../components/site/Seo"
import { ArchiveGrid, ArchiveList } from "../components/editorial/ArchiveGrid"
import { ArchiveLightbox } from "../components/editorial/ArchiveLightbox"
import { ArchiveQuote } from "../components/editorial/ArchiveQuote"
import { Photo } from "../components/ui/photo"
import { archiveFilters, archiveItems, archiveOpener, archiveQuote } from "../content/archive"

/**
 * The archive.
 *
 * The page opens full bleed on one photograph with the title set over it, the
 * way a plate faces the title page of a catalogue. The image holds still while
 * the type rises off it as you scroll, and the standfirst, the note and the
 * short index of what the archive holds all sit on that same plate rather than
 * in a band beneath it. Under the fold the filters sit in a rail, then the
 * hang, then one line from the artist before the footer.
 *
 * The active filter lives in the URL (?view=…) so a filtered wall can be
 * linked to and the back button behaves. How the wall is drawn — plates or
 * list — is a preference for the session rather than an address, so it stays
 * in component state.
 */

/** One line of the opening title, uncovered from behind its own line box. */
const TitleLine = ({ children, delay = 0, className = "" }) => {
  const reduce = useReducedMotion()
  if (reduce) return <span className={`block ${className}`}>{children}</span>
  return (
    <span className="block overflow-hidden pb-[0.1em]">
      <motion.span
        className={`inline-block ${className}`}
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </span>
  )
}

export const Archive = () => {
  const reduce = useReducedMotion()
  const [params, setParams] = useSearchParams()
  const [mode, setMode] = useState("grid")
  const [open, setOpen] = useState(null)

  const active = archiveFilters.some((f) => f.key === params.get("view")) ? params.get("view") : "all"
  const items = useMemo(
    () => (active === "all" ? archiveItems : archiveItems.filter((i) => i.tags.includes(active))),
    [active],
  )

  const select = (key) => {
    setOpen(null)
    setParams(key === "all" ? {} : { view: key }, { replace: false })
  }

  // The viewer steps through whatever the filter has left on the wall, and
  // wraps, so the set never dead-ends at either edge.
  const step = useCallback(
    (delta) => setOpen((i) => (i === null ? i : (i + delta + items.length) % items.length)),
    [items.length],
  )

  const plate = useRef(null)
  const { scrollYProgress } = useScroll({ target: plate, offset: ["start start", "end start"] })
  // The photograph settles slowly, the type leaves faster. The gap between the
  // two rates is what gives the opening its depth.
  const photo = useTransform(scrollYProgress, [0, 1], ["0%", "12%"])
  const title = useTransform(scrollYProgress, [0, 1], ["0%", "-32%"])
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  const Wall = mode === "grid" ? ArchiveGrid : ArchiveList

  return (
    <>
      <Seo
        title="Archive"
        description="A visual record of people, places, history, photography, cultural life, paintings, events and memory."
        path="/archive"
        image="/gallery/opt/2-1600.webp"
      />

      <section ref={plate} className="ah-opener" aria-label="The archive">
        <motion.div className="ah-opener-photo" style={reduce ? undefined : { y: photo }}>
          <Photo
            id={archiveOpener.plate.id}
            alt={archiveOpener.plate.alt}
            width={1600}
            sizes="100vw"
            priority
          />
        </motion.div>
        <div className="ah-opener-scrim" aria-hidden="true" />

        <motion.div className="ah-opener-type" style={reduce ? undefined : { y: title, opacity: fade }}>
          <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
            <p className="ah-opener-eyebrow">{archiveOpener.eyebrow}</p>

            <h1 className="ah-title">
              <TitleLine delay={0.12}>{archiveOpener.title.lead}</TitleLine>
              <TitleLine delay={0.24} className="ah-title-accent">
                {archiveOpener.title.accent}
              </TitleLine>
            </h1>

            <div className="ah-opener-grid">
              <p className="ah-standfirst">{archiveOpener.standfirst}</p>
              <p className="ah-opener-note">{archiveOpener.intro}</p>

              <div className="ah-opener-index">
                <div className="ah-opener-index-rule" aria-hidden="true" />
                <ul>
                  {archiveOpener.index.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <div className="bg-charcoal">
        <div className="ah-rail">
          <div className="mx-auto flex max-w-6xl items-center gap-6 px-6 py-4 lg:px-8">
            <div role="group" aria-label="Filter the archive" className="ah-rail-scroll">
              {archiveFilters.map((f) => {
                const on = f.key === active
                return (
                  <button
                    key={f.key}
                    type="button"
                    onClick={() => select(f.key)}
                    aria-pressed={on}
                    className={`ah-filter ${on ? "ah-filter-on" : ""}`}
                  >
                    {f.label}
                  </button>
                )
              })}
            </div>

            <div className="ml-auto flex shrink-0 items-center gap-5">
              <p className="ah-count" aria-live="polite">
                {items.length} {items.length === 1 ? "item" : "items"}
              </p>
              <div className="ah-views" role="group" aria-label="How the archive is shown">
                <button
                  type="button"
                  onClick={() => setMode("grid")}
                  aria-pressed={mode === "grid"}
                  className={`ah-view ${mode === "grid" ? "ah-view-on" : ""}`}
                >
                  <SquaresFour size={17} weight={mode === "grid" ? "fill" : "regular"} aria-hidden="true" />
                  <span className="sr-only">Plates</span>
                </button>
                <button
                  type="button"
                  onClick={() => setMode("list")}
                  aria-pressed={mode === "list"}
                  className={`ah-view ${mode === "list" ? "ah-view-on" : ""}`}
                >
                  <ListBullets size={17} weight="regular" aria-hidden="true" />
                  <span className="sr-only">List</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-6 pt-14 pb-24 md:pt-20 md:pb-32 lg:px-8">
          <Wall items={items} onOpen={setOpen} />
        </div>
      </div>

      <ArchiveQuote text={archiveQuote.text} attribution={archiveQuote.attribution} />

      <ArchiveLightbox items={items} index={open} onClose={() => setOpen(null)} onStep={step} />
    </>
  )
}
