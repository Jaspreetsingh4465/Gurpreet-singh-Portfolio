import { createContext, useContext, useState } from "react"
import { motion, useReducedMotion, useScroll } from "motion/react"
import "./depth.css"
const MotionPreference = createContext(false)
export const useSceneMotion = () => { const system = useReducedMotion(); const paused = useContext(MotionPreference); return system || paused }
export const DepthProvider = ({ children }) => {
 const [paused, setPaused] = useState(false)
 const system = useReducedMotion()
 const { scrollYProgress } = useScroll()
 return <MotionPreference.Provider value={paused}><div className={`depth-site ${paused || system ? "depth-still" : ""}`}>
 <motion.div className="reading-progress" aria-hidden="true" style={{scaleX:scrollYProgress}} />
 {children}
 <button className="depth-toggle" aria-pressed={paused} onClick={()=>setPaused(v=>!v)}>{paused ? "Enable 3D motion" : "Pause 3D motion"}<span aria-hidden="true">{paused ? "▷" : "Ⅱ"}</span></button>
 </div></MotionPreference.Provider>
}
