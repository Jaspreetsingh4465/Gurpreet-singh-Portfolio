import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { Photo } from "../ui/photo"

/**
 * An archive wall. Items carry a size (wide / tall / square) that sets their
 * span on a 6-column grid, so proportions stay mixed whatever the filter
 * leaves. Filter changes animate with layout + fade, transform-only.
 */
const SPAN = {
  wide: { cell: "col-span-6 md:col-span-4", frame: "aspect-[3/2]" },
  tall: { cell: "col-span-3 md:col-span-2", frame: "aspect-[3/4]" },
  square: { cell: "col-span-3 md:col-span-2", frame: "aspect-square" },
}

export const ArchiveGrid = ({ items }) => {
  const reduce = useReducedMotion()
  return (
    <motion.ul layout={!reduce} className="grid grid-flow-dense grid-cols-6 items-start gap-x-3 gap-y-8 md:gap-x-5 md:gap-y-10">
      <AnimatePresence initial={false}>
        {items.map((item, i) => (
          <motion.li
            key={item.id}
            layout={!reduce}
            initial={reduce ? false : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: reduce ? 0 : Math.min(i, 8) * 0.02 }}
            className={(SPAN[item.size] ?? SPAN.square).cell}
          >
            <figure className="group">
              <div className={`w-full overflow-hidden bg-charcoal-800 ${(SPAN[item.size] ?? SPAN.square).frame}`}>
                <Photo
                  id={item.id}
                  alt={item.alt}
                  width={item.size === "wide" ? 1600 : 700}
                  sizes={item.size === "wide" ? "(max-width: 768px) 100vw, 760px" : "(max-width: 768px) 50vw, 380px"}
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="mt-2.5 flex items-baseline gap-3 text-[13px] text-ivory/45 transition-colors duration-300 group-hover:text-ivory/75">
                <span className="h-px w-4 shrink-0 translate-y-[-0.3em] bg-gold/60" aria-hidden="true" />
                {item.caption}
              </figcaption>
            </figure>
          </motion.li>
        ))}
      </AnimatePresence>
    </motion.ul>
  )
}
