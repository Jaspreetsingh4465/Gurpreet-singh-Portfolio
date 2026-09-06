import { useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { CaretLeft, CaretRight } from "@phosphor-icons/react"
import { Photo } from "../ui/photo"

const pad = (n) => String(n).padStart(2, "0")

/**
 * A carousel of frames, one shown at a time, with its caption laid over the
 * lower left and a counter beneath.
 *
 * Accessibility notes, because carousels are usually where this goes wrong:
 * the region is a labelled group with `aria-roledescription="carousel"`, the
 * two controls are real buttons with their own labels, left and right arrow
 * keys move between frames when the region has focus, and a visually hidden
 * live region announces each change for screen readers. There is no autoplay,
 * so nothing moves unless the reader asks for it.
 *
 * The crossfade is the only motion, and it collapses to an instant swap under
 * `prefers-reduced-motion`.
 */
export const WorkCarousel = ({ frames, label = "Works", tone = "light" }) => {
  const [i, setI] = useState(0)
  const reduce = useReducedMotion()
  const count = frames.length
  const frame = frames[i]

  const go = (delta) => setI((n) => (n + delta + count) % count)

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault()
      go(-1)
    } else if (e.key === "ArrowRight") {
      e.preventDefault()
      go(1)
    }
  }

  const light = tone === "light"

  const control =
    "grid size-11 place-items-center rounded-full border backdrop-blur-sm transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 " +
    (light
      ? "border-ivory/40 bg-charcoal/30 text-ivory hover:border-ivory hover:bg-charcoal/55 focus-visible:outline-gold"
      : "border-ivory/30 bg-charcoal/50 text-ivory hover:border-gold focus-visible:outline-gold-light")

  return (
    <div>
      <div
        role="group"
        aria-roledescription="carousel"
        aria-label={label}
        tabIndex={0}
        onKeyDown={onKeyDown}
        className="relative isolate overflow-hidden rounded-sm bg-charcoal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
      >
        <div className="aspect-[16/10] w-full sm:aspect-[16/9] lg:aspect-[2/1]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={frame.id}
              className="h-full w-full"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduce ? undefined : { opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <Photo
                id={frame.id}
                alt={frame.alt}
                width={1600}
                sizes="(max-width: 1024px) 100vw, 1100px"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Caption, over a scrim so it stays readable on any frame */}
        <figcaption className="pointer-events-none absolute bottom-5 left-5 max-w-[34ch] bg-charcoal/85 p-5 backdrop-blur-sm sm:bottom-8 sm:left-8">
          <span className="block h-px w-10 bg-gold" aria-hidden="true" />
          <p className="display mt-4 text-[1.15rem] leading-tight text-ivory">{frame.title}</p>
          <p className="mt-2 text-[13.5px] leading-[1.55] text-ivory/70">{frame.note}</p>
        </figcaption>

        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous frame"
          className={`absolute top-1/2 left-4 -translate-y-1/2 ${control}`}
        >
          <CaretLeft size={16} aria-hidden="true" />
        </button>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next frame"
          className={`absolute top-1/2 right-4 -translate-y-1/2 ${control}`}
        >
          <CaretRight size={16} aria-hidden="true" />
        </button>

        <p aria-live="polite" className="sr-only">
          {`Frame ${i + 1} of ${count}: ${frame.title}. ${frame.note}`}
        </p>
      </div>

      {/* Counter, with the rule filling as you move through the set */}
      <div
        className={`mt-6 flex items-center gap-4 text-[11px] tracking-[0.24em] ${light ? "text-charcoal/50" : "text-ivory/50"}`}
      >
        <span className={light ? "text-gold" : "text-gold-light"}>{pad(i + 1)}</span>
        <span
          aria-hidden="true"
          className={`h-px w-24 sm:w-40 ${light ? "bg-charcoal/20" : "bg-ivory/20"}`}
        >
          <span
            className="block h-px bg-gold transition-[width] duration-500"
            style={{ width: `${((i + 1) / count) * 100}%` }}
          />
        </span>
        <span>{pad(count)}</span>
      </div>
    </div>
  )
}
