import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react"
export const Tilt = ({children,className=""}) => {
 const reduce=useReducedMotion(), x=useMotionValue(0), y=useMotionValue(0)
 const rotateX=useSpring(x,{stiffness:150,damping:24}),rotateY=useSpring(y,{stiffness:150,damping:24})
 return <motion.div className={className} style={reduce?undefined:{rotateX,rotateY,transformPerspective:1100}} onPointerMove={e=>{if(reduce||e.pointerType!=="mouse")return;const r=e.currentTarget.getBoundingClientRect();x.set(-((e.clientY-r.top)/r.height-.5)*7);y.set(((e.clientX-r.left)/r.width-.5)*9)}} onPointerLeave={()=>{x.set(0);y.set(0)}}>{children}</motion.div>
}
