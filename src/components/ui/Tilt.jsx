import { useCompactLayout, useSceneMotion } from "../site/DepthProvider"
import { motion, useMotionValue, useSpring } from "motion/react"
export const Tilt = (props) => {
  const compact = useCompactLayout()
  const reduce = useSceneMotion()
  if (compact || reduce) return <div className={props.className}>{props.children}</div>
  return <PointerTilt {...props} />
}
const PointerTilt = ({ children, className = "" }) => {
  const x = useMotionValue(0), y = useMotionValue(0)
  const rotateX = useSpring(x, { stiffness: 150, damping: 24 })
  const rotateY = useSpring(y, { stiffness: 150, damping: 24 })
  return <motion.div className={className} style={{ rotateX, rotateY, transformPerspective: 1100 }}
    onPointerMove={e => {
      if (e.pointerType !== "mouse") return
      const r = e.currentTarget.getBoundingClientRect()
      x.set(-((e.clientY - r.top) / r.height - .5) * 7)
      y.set(((e.clientX - r.left) / r.width - .5) * 9)
    }} onPointerLeave={() => { x.set(0); y.set(0) }}>{children}</motion.div>
}
