import { useEffect, useRef } from "react"
import { motion, useReducedMotion } from "motion/react"

/**
 * Soft page entry: a short fade with a small upward settle. Exit is handled by
 * AnimatePresence in the layout. 500ms, transform and opacity only, disabled
 * under prefers-reduced-motion.
 *
 * The first page of a visit does not fade in: the browser has just painted it
 * and a second arrival would read as a stutter. That is decided here, on this
 * one element, rather than with `initial={false}` on AnimatePresence, which
 * would switch off the start state of every reveal beneath it as well.
 */
let firstPage = true

export const PageTransition = ({ children }) => {
  const reduce = useReducedMotion()
  const skip = useRef(firstPage)
  useEffect(() => {
    firstPage = false
  }, [])
  return (
    <motion.div
      initial={reduce || skip.current ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduce ? undefined : { opacity: 0, y: -8 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
