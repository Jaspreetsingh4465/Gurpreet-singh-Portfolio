import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { useSceneMotion } from "../site/DepthProvider"
export const ScrollDepth = ({children,className="",direction=1}) => {
 const ref=useRef(null), reduce=useSceneMotion()
 const {scrollYProgress}=useScroll({target:ref,offset:["start end","end start"]})
 const rotateX=useTransform(scrollYProgress,[0,.45,1],[6,0,-4])
 const rotateY=useTransform(scrollYProgress,[0,.5,1],[-3*direction,0,2*direction])
 const y=useTransform(scrollYProgress,[0,.5,1],[12,0,-12])
 const scale=useTransform(scrollYProgress,[0,.45,1],[.98,1,.99])
 return <div ref={ref} className={`scroll-depth ${className}`}><motion.div className="depth-surface h-full w-full" style={reduce?{rotateX:0,rotateY:0,y:0,scale:1}:{rotateX,rotateY,y,scale,transformPerspective:1400}}>{children}</motion.div></div>
}

