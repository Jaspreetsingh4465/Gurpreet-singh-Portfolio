import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { Link } from "react-router"
import { Photo } from "../ui/photo"
import { useCompactLayout, useSceneMotion } from "../site/DepthProvider"
const plates=[{id:"12-face",alt:"Painted portrait detail",label:"The face",to:"/work/portraiture"},{id:"12-lion",alt:"Detail of a painted lion",label:"The detail",to:"/work/historical"},{id:"15-studio",alt:"Gurpreet Singh drawing in his studio",label:"The hand",to:"/about"}]
const Plate=({plate,index,progress,reduce})=>{
 const x=useTransform(progress,[0,.5,1],[(index-1)*180,(index-1)*310,(index-1)*390])
 const z=useTransform(progress,[0,.5,1],[-350+index*80,index===1?130:0,-120])
 const rotateY=useTransform(progress,[0,.5,1],[(index-1)*-35,(index-1)*-12,(index-1)*18])
 const rotateZ=useTransform(progress,[0,1],[(index-1)*10,(index-1)*-6])
 return <motion.div className="journey-plate" style={reduce?undefined:{x,z,rotateY,rotateZ}}><Link to={plate.to}><Photo id={plate.id} alt={plate.alt} sizes="(max-width:760px) 85vw,320px" className="journey-photo"/><span><small>0{index+1}</small>{plate.label}<span aria-hidden="true">↗</span></span></Link></motion.div>
}
const MovingJourney=()=>{
 const ref=useRef(null),reduce=useSceneMotion()
 const {scrollYProgress}=useScroll({target:ref,offset:["start start","end end"]})
 const titleY=useTransform(scrollYProgress,[0,1],[18,-20])
 return <section id="inside-the-practice" ref={ref} className={`scroll-journey ${reduce?"journey-still":""}`} aria-label="Inside the artist's practice"><div className="journey-sticky">
 <motion.div className="journey-heading" style={reduce?undefined:{y:titleY}}><p>INSIDE THE PRACTICE</p><h2>Look closer.<br/><em>There is always more.</em></h2></motion.div>
 <div className="journey-stage">{plates.map((plate,index)=><Plate key={plate.id} plate={plate} index={index} progress={scrollYProgress} reduce={reduce}/>)}</div>
 <div className="journey-note"><span>FACE / DETAIL / PROCESS</span><p>From the smallest mark to the story it leaves behind.</p><span>SCROLL TO REVEAL ↓</span></div>
 </div></section>
}


export const ScrollJourney = () => {
 const compact = useCompactLayout()
 const reduce = useSceneMotion()
 if (!compact && !reduce) return <MovingJourney />
 return <section id="inside-the-practice" className="scroll-journey journey-still" aria-label="Inside the artist's practice">
  <div className="journey-sticky">
   <div className="journey-heading"><p>INSIDE THE PRACTICE</p><h2>Look closer.<br/><em>There is always more.</em></h2></div>
   <div className="journey-stage">{plates.map((plate, index) => <div className="journey-plate" key={plate.id}>
    <Link to={plate.to}><Photo id={plate.id} alt={plate.alt} sizes="(max-width:760px) 80vw,320px" className="journey-photo"/>
     <span><small>0{index + 1}</small>{plate.label}<span aria-hidden="true">↗</span></span>
    </Link>
   </div>)}</div>
   <div className="journey-note"><span>FACE / DETAIL / PROCESS</span><p>From the smallest mark to the story it leaves behind.</p></div>
  </div>
 </section>
}
