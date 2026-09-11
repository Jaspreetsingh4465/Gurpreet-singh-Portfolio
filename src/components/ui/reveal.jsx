import { Fragment, useId } from "react"
import { motion } from "motion/react"
import { useSceneMotion } from "../site/DepthProvider"
import { ScrollDepth } from "./ScrollDepth"
const EASE = [0.16, 1, 0.3, 1]
const VIEW = { once: true, amount: 0.01, margin: "80px 0px 80px 0px" }

// Keep content readable even after anchor jumps or fast scrolling. Animate
// position only; an observer must never be responsible for making text visible.
export const Reveal = ({ children, delay = 0, className, y = 16 }) => {
  const reduce = useSceneMotion()
  return <motion.div className={className}
    initial={reduce ? false : { y, rotateX: 4 }}
    whileInView={{ y: 0, rotateX: 0 }}
    animate={reduce ? { y: 0, rotateX: 0 } : undefined}
    style={{ transformPerspective: 1200 }}
    viewport={{ once: true, amount: 0.05 }}
    transition={{ duration: reduce ? 0 : 0.5, delay: reduce ? 0 : Math.min(delay, 0.2), ease: EASE }}
  >{children}</motion.div>
}

// The outer frame keeps its dimensions while the inner print reveals once.
// Start just before entry so fast scrolling does not leave visible curtains.
export const RevealImage = ({ className = "", ...props }) => (
  <ScrollDepth className={className} direction={typeof props.seed === "number" && props.seed % 2 ? -1 : 1}>
    <ImageReveal {...props} className="h-full w-full" />
  </ScrollDepth>
)
export const REVEALS = ["curtain", "wipe", "split", "blinds", "rise", "tilt", "sheen"]

const hash = (seed) => {
  if (typeof seed === "number") return Math.abs(Math.trunc(seed))
  let h = 5381
  for (const ch of String(seed)) h = (h * 33) ^ ch.charCodeAt(0)
  return Math.abs(h)
}

const SLATS = [0, 1, 2, 3, 4]

/*
 * One observer per photograph. The outer wrapper is what `whileInView`
 * watches, and it hands the "shown" state down to its parts as a variant.
 * The parts must not observe themselves: the light bar in "sheen" begins
 * outside its clipping frame, so it would never count as visible and would
 * never fire.
 */
const print = (delay, extra) => ({ delay: delay + extra, ease: EASE })

const V = {
  settle: (delay, from = 1.14, duration = 1.2) => ({
    hidden: { scale: from },
    shown: { scale: 1, transition: { duration, ...print(delay, 0) } },
  }),
  lift: (delay) => ({
    hidden: { scaleY: 1 },
    shown: { scaleY: 0, transition: { duration: 0.9, ...print(delay, 0) } },
  }),
  draw: (delay) => ({
    hidden: { scaleX: 1 },
    shown: { scaleX: 0, transition: { duration: 0.95, ...print(delay, 0) } },
  }),
  slat: (delay, i) => ({
    hidden: { scaleY: 1 },
    shown: { scaleY: 0, transition: { duration: 0.7, ...print(delay, i * 0.08) } },
  }),
}

const ImageReveal = ({
  children,
  delay = 0,
  className = "",
  curtain = "bg-charcoal",
  variant,
  seed,
}) => {
  const reduce = useSceneMotion()
  const id = useId()
  const kind = REVEALS.includes(variant) ? variant : REVEALS[hash(seed ?? id) % REVEALS.length]

  if (reduce) return <div className={className}>{children}</div>

  const cover = `pointer-events-none absolute inset-0 ${curtain}`
  const frame = {
    className: `relative overflow-hidden ${className}`,
    "data-image-reveal": kind,
    initial: "hidden",
    whileInView: "shown",
    viewport: VIEW,
  }

  switch (kind) {
    case "wipe":
      return (
        <motion.div {...frame}>
          <motion.div
            className="h-full w-full"
            variants={{
              hidden: { x: "-7%", scale: 1.08 },
              shown: { x: "0%", scale: 1, transition: { duration: 1.2, ...print(delay, 0) } },
            }}
          >
            {children}
          </motion.div>
          <motion.div aria-hidden="true" className={`${cover} origin-right`} variants={V.draw(delay)} />
        </motion.div>
      )

    case "split":
      return (
        <motion.div {...frame}>
          <motion.div className="h-full w-full" variants={V.settle(delay, 1.12, 1.3)}>
            {children}
          </motion.div>
          <motion.div aria-hidden="true" className={`${cover} right-1/2 origin-left`} variants={V.draw(delay)} />
          <motion.div aria-hidden="true" className={`${cover} left-1/2 origin-right`} variants={V.draw(delay)} />
        </motion.div>
      )

    case "blinds":
      return (
        <motion.div {...frame}>
          <motion.div className="h-full w-full" variants={V.settle(delay, 1.06, 1.4)}>
            {children}
          </motion.div>
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex">
            {SLATS.map((i) => (
              <motion.div key={i} className={`h-full flex-1 origin-top ${curtain}`} variants={V.slat(delay, i)} />
            ))}
          </div>
        </motion.div>
      )

    case "rise":
      return (
        <motion.div {...frame}>
          <motion.div
            className="h-full w-full"
            variants={{
              hidden: { y: "12%", scale: 1.05, opacity: 0 },
              shown: { y: "0%", scale: 1, opacity: 1, transition: { duration: 1.1, ...print(delay, 0) } },
            }}
          >
            {children}
          </motion.div>
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-[2px] origin-left bg-gold-light"
            variants={{
              hidden: { scaleX: 0, opacity: 1 },
              shown: {
                scaleX: [0, 1, 1],
                opacity: [1, 1, 0],
                transition: { duration: 1.6, delay, ease: EASE, times: [0, 0.55, 1] },
              },
            }}
          />
        </motion.div>
      )

    case "tilt":
      return (
        <motion.div {...frame} style={{ perspective: "1200px" }}>
          <motion.div
            className="h-full w-full origin-bottom"
            variants={{
              hidden: { rotateX: 14, y: "8%", opacity: 0 },
              shown: { rotateX: 0, y: "0%", opacity: 1, transition: { duration: 1.2, ...print(delay, 0) } },
            }}
          >
            {children}
          </motion.div>
        </motion.div>
      )

    case "sheen":
      return (
        <motion.div {...frame}>
          <motion.div
            className="h-full w-full"
            variants={{
              hidden: { scale: 1.08, opacity: 0 },
              shown: { scale: 1, opacity: 1, transition: { duration: 1.1, ...print(delay, 0) } },
            }}
          >
            {children}
          </motion.div>
          <motion.div
            aria-hidden="true"
            className="reveal-sheen pointer-events-none absolute top-[-20%] bottom-[-20%] left-0 w-[40%]"
            variants={{
              hidden: { x: "-150%", skewX: -18, opacity: 0 },
              shown: {
                x: "400%",
                skewX: -18,
                opacity: [0, 0.9, 0],
                transition: { duration: 1.4, delay: delay + 0.4, ease: [0.4, 0, 0.2, 1], times: [0, 0.45, 1] },
              },
            }}
          />
        </motion.div>
      )

    case "curtain":
    default:
      return (
        <motion.div {...frame}>
          <motion.div className="h-full w-full" variants={V.settle(delay)}>
            {children}
          </motion.div>
          <motion.div aria-hidden="true" className={`${cover} origin-top`} variants={V.lift(delay)} />
        </motion.div>
      )
  }
}

export const RevealWords = ({ text, className, delay = 0, accentFrom, accentClassName = "text-gold-light" }) => {
  const reduce = useSceneMotion()
  return <span className={className}>{text.split(" ").map((word, i, words) => (
    <Fragment key={`${word}-${i}`}>
      <motion.span className={`inline-block ${accentFrom !== undefined && i >= accentFrom ? accentClassName : ""}`}
        initial={reduce ? false : { y: 12 }} animate={{ y: 0 }}
        transition={{ duration: reduce ? 0 : 0.5, delay: reduce ? 0 : Math.min(delay + i * 0.035, 0.35), ease: EASE }}>
        {word}
      </motion.span>{i < words.length - 1 ? " " : null}
    </Fragment>
  ))}</span>
}

