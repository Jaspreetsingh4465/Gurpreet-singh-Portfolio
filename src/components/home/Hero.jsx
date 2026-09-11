import { useState } from "react"
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react"
import { Link } from "react-router"
import { ArrowUpRight, ArrowLeft, ArrowRight, ArrowDown } from "@phosphor-icons/react"
import { Reveal } from "../ui/reveal"
import { workCategories } from "../../content/work"
import { img } from "../../content/site"
import "./immersive.css"
const collection = [workCategories[0], workCategories[6], workCategories[1]]
export const Hero = () => {
 const [active, setActive] = useState(0)
 const [paused, setPaused] = useState(false)
 const reduce = useReducedMotion()
 const mx = useMotionValue(0), my = useMotionValue(0)
 const rotateX = useSpring(my, { stiffness: 90, damping: 22 }), rotateY = useSpring(mx, { stiffness: 90, damping: 22 })
 const reset = () => { mx.set(0); my.set(0) }
 const move = (e) => { if (reduce || paused || e.pointerType !== "mouse") return; const r = e.currentTarget.getBoundingClientRect(); mx.set(((e.clientX-r.left)/r.width-.5)*14); my.set(-((e.clientY-r.top)/r.height-.5)*10) }
 const current = collection[active]
 return <section id="top" className={`immersive-hero ${paused ? "motion-paused" : ""}`}>
  <div className="studio-glow" aria-hidden="true"/><div className="studio-grid" aria-hidden="true"/>
  <div className="studio-topline"><span>THE ART OF REMEMBERING</span><span>BATHINDA, PUNJAB · INDIA</span></div>
  <div className="studio-layout"><div className="studio-copy">
   <Reveal><p className="studio-eyebrow"><span/> PAINTER · EDUCATOR · RESEARCHER</p></Reveal>
   <Reveal delay={.12}><h1 className="studio-title">A life in art.<br/><em>A world</em><br/>in every stroke<span>.</span></h1></Reveal>
   <Reveal delay={.24}><p className="studio-description">I’m Gurpreet Singh. Through paint, portraiture and the stories of Punjab, I preserve what time leaves behind.</p></Reveal>
   <Reveal delay={.32} className="studio-actions"><Link to="/work" className="studio-primary">Explore the collection <ArrowUpRight size={20}/></Link><Link to="/about" className="studio-secondary">Meet the artist <ArrowRight size={17}/></Link></Reveal>
   <Reveal delay={.4}><div className="studio-signature">Gurpreet Singh <span>ARTIST, BATHINDA</span></div></Reveal>
  </div><div className="studio-gallery" onPointerMove={move} onPointerLeave={reset}>
   <span className="gallery-coordinate" aria-hidden="true">A STUDY IN LIGHT, MEMORY & FORM</span><div className="gallery-orbit" aria-hidden="true"/>
   <motion.div className="gallery-scene" style={reduce || paused ? undefined : { rotateX, rotateY }}>
    {collection.map((item,index) => { const slot = (index-active+3)%3; return <motion.div key={item.slug} className="gallery-frame" initial={false} animate={{x:slot===0?"0%":slot===1?"39%":"-37%",y:slot===0?"0%":slot===1?"-9%":"8%",rotateY:slot===0?-9:slot===1?-24:22,rotateZ:slot===0?-3:slot===1?9:-12,scale:slot===0?1:.79,opacity:slot===0?1:.48,z:slot===0?70:-70}} transition={{duration:reduce?0:.75,ease:[.22,1,.36,1]}} style={{zIndex:slot===0?3:1}} aria-hidden={slot!==0}>
     <div className="gallery-mat"><img {...img(item.photo.id)} sizes="(max-width:700px) 65vw,430px" alt={slot===0?item.photo.alt:""} fetchPriority={index===0?"high":"auto"}/><div className="gallery-sheen" aria-hidden="true"/></div><div className="gallery-frame-label"><span>GURPREET SINGH</span><span>0{index+1}</span></div>
    </motion.div> })}
   </motion.div><div className="gallery-floor" aria-hidden="true"/>
   <div className="gallery-caption"><div aria-live="polite" aria-atomic="true"><span className="gallery-kicker">SELECTED PRACTICE / 0{active+1}</span><Link to={`/work/${current.slug}`}>{current.title} <ArrowUpRight size={19}/></Link></div><div className="gallery-controls"><button aria-label="Previous artwork" onClick={()=>setActive((active+2)%3)}><ArrowLeft size={18}/></button><button aria-label="Next artwork" onClick={()=>setActive((active+1)%3)}><ArrowRight size={18}/></button></div></div>
  </div></div>
  <div className="studio-bottom"><a href="#selected-practice"><ArrowDown size={16}/> SCROLL TO EXPLORE</a><span>ROOTED IN PUNJAB. OPEN TO THE WORLD.</span><button onClick={()=>{setPaused(!paused);reset()}} aria-pressed={paused}>{paused?"RESUME":"PAUSE"} HERO MOTION <span aria-hidden="true">{paused?"▷":"Ⅱ"}</span></button></div>
 </section>
}
