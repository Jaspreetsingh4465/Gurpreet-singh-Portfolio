import { createContext, useContext, useState, useSyncExternalStore } from "react"
import { motion, useReducedMotion, useScroll } from "motion/react"
import "./depth.css"
import "./mobile.css"

const MotionPreference = createContext(false)
const CompactLayout = createContext(false)
const compactQuery = "(max-width: 760px), (max-height: 600px)"
const subscribeCompact = (notify) => {
  const query = window.matchMedia(compactQuery)
  query.addEventListener("change", notify)
  return () => query.removeEventListener("change", notify)
}
const getCompact = () => window.matchMedia(compactQuery).matches
export const useCompactLayout = () => useContext(CompactLayout)
export const useSceneMotion = () => {
  const system = useReducedMotion()
  const paused = useContext(MotionPreference)
  return system || paused
}
export const DepthProvider = ({ children }) => {
  const [paused, setPaused] = useState(false)
  const system = useReducedMotion()
  const compact = useSyncExternalStore(subscribeCompact, getCompact, () => false)
  const { scrollYProgress } = useScroll()
  return <CompactLayout.Provider value={compact}><MotionPreference.Provider value={paused}>
    <div className={`depth-site ${paused || system ? "depth-still" : ""}`}>
      <motion.div className="reading-progress" aria-hidden="true" style={{ scaleX: scrollYProgress }} />
      {children}
      <button className="depth-toggle" aria-pressed={paused} onClick={() => setPaused(v => !v)}>
        {paused ? "Enable 3D motion" : "Pause 3D motion"}<span aria-hidden="true">{paused ? "▷" : "Ⅱ"}</span>
      </button>
    </div>
  </MotionPreference.Provider></CompactLayout.Provider>
}
