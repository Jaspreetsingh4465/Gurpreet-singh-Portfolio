import { motion, useReducedMotion } from "motion/react"

const EASE = [0.16, 1, 0.3, 1]

/** Standard fade-and-rise used for text blocks. */
export const Reveal = ({ children, delay = 0, className, y = 20 }) => {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

/**
 * Photographs are uncovered rather than faded: a curtain retreats upward while
 * the image behind it settles back from a slight overscale. It reads like a
 * print being revealed, and it gives images a different arrival from text so
 * the eye can tell the two apart.
 *
 * Deliberately transform-only (scaleY / scale). An earlier version animated
 * clip-path, which the compositor cannot accelerate and which silently failed
 * to interpolate in the browser, leaving every photograph hidden.
 */
export const RevealImage = ({ children, delay = 0, className = "", curtain = "bg-charcoal" }) => {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="h-full w-full"
        initial={{ scale: 1.14 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2, delay, ease: EASE }}
      >
        {children}
      </motion.div>
      <motion.div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 origin-top ${curtain}`}
        initial={{ scaleY: 1 }}
        whileInView={{ scaleY: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, delay, ease: EASE }}
      />
    </div>
  )
}

/**
 * Headline that arrives one word at a time. Used once, on the hero, so the
 * page opens on a beat instead of appearing all at once.
 */
export const RevealWords = ({ text, className, delay = 0, accentFrom, accentClassName = "text-gold-light" }) => {
  const reduce = useReducedMotion()
  const words = text.split(" ")
  if (reduce) return <span className={className}>{text}</span>
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
          <motion.span
            className={`inline-block ${accentFrom !== undefined && i >= accentFrom ? accentClassName : ""}`}
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.8, delay: delay + i * 0.08, ease: EASE }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  )
}
