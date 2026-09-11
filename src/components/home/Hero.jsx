import { useSceneMotion as useReducedMotion } from "../site/DepthProvider"
import { useEffect, useRef, useState } from "react"
import { animate, motion, useAnimationFrame, useInView, useMotionValue, useSpring, useTransform } from "motion/react"
import { Link } from "react-router"
import { ArrowUpRight, ArrowLeft, ArrowRight, ArrowDown } from "@phosphor-icons/react"
import { Reveal } from "../ui/reveal"
import { workCategories } from "../../content/work"
import { img } from "../../content/site"
import "./immersive.css"
const collection = [workCategories[0], workCategories[6], workCategories[1]]
const OrbitFrame = ({ item, index, active, phase }) => {
 const angle = useTransform(phase, value => (value + index * 120) * Math.PI / 180)
 const x = useTransform(angle, value => `${Math.sin(value) * 45}%`)
 const y = useTransform(angle, value => `${(1 - Math.cos(value)) * -7}%`)
 const z = useTransform(angle, value => Math.cos(value) * 95)
 const scale = useTransform(angle, value => .81 + Math.cos(value) * .19)
 const opacity = useTransform(angle, value => .7 + Math.cos(value) * .3)
 const rotateY = useTransform(angle, value => Math.sin(value) * -24)
 const rotateZ = useTransform(angle, value => Math.sin(value) * 7)
 const zIndex = useTransform(angle, value => Math.round((Math.cos(value) + 1) * 50))
 return <motion.div className="gallery-frame" style={{ x, y, z, scale, opacity, rotateY, rotateZ, zIndex }} aria-hidden={index !== active}>
  <div className="gallery-mat"><img {...img(item.photo.id)} sizes="(max-width:700px) 65vw,430px" alt={index === active ? item.photo.alt : ""} fetchPriority={index === 0 ? "high" : "auto"}/><div className="gallery-sheen" aria-hidden="true"/></div>
  <div className="gallery-frame-label"><span>GURPREET SINGH</span><span>0{index + 1}</span></div>
 </motion.div>
}

export const Hero = () => {
 const [active, setActive] = useState(0)
 const [paused, setPaused] = useState(false)
 const reduce = useReducedMotion()
 const heroRef = useRef(null)
 const inView = useInView(heroRef)
 const [focused, setFocused] = useState(false)
 const phase = useMotionValue(0)
 const manual = useRef(null)
 const activeRef = useRef(0)
 useEffect(() => phase.on("change", value => {
   const next = ((Math.round(-value / 120) % 3) + 3) % 3
   if (next !== activeRef.current) { activeRef.current = next; setActive(next) }
 }), [phase])
 useEffect(() => {
   if (paused || reduce) { manual.current?.stop(); manual.current = null }
   return () => { manual.current?.stop(); manual.current = null }
 }, [paused, reduce])
 useAnimationFrame((_, delta) => {
   if (!paused && !reduce && !focused && inView && !document.hidden && !manual.current) {
     phase.set(phase.get() - Math.min(delta, 50) * .018)
   }
 })
 const step = direction => {
   manual.current?.stop()
   const destination = (Math.round(phase.get() / 120) - direction) * 120
   if (reduce || paused) { phase.set(destination); manual.current = null; return }
   manual.current = animate(phase, destination, { duration: .8, ease: [.22, 1, .36, 1], onComplete: () => { manual.current = null } })
 }
 const mx = useMotionValue(0), my = useMotionValue(0)
 const rotateX = useSpring(my, { stiffness: 90, damping: 22 }), rotateY = useSpring(mx, { stiffness: 90, damping: 22 })
 const reset = () => { mx.set(0); my.set(0) }
 const move = (e) => { if (reduce || paused || e.pointerType !== "mouse") return; const r = e.currentTarget.getBoundingClientRect(); mx.set(((e.clientX-r.left)/r.width-.5)*14); my.set(-((e.clientY-r.top)/r.height-.5)*10) }
 const current = collection[active]
 return <section ref={heroRef} id="top" className={`immersive-hero ${paused ? "motion-paused" : ""}`}>
  <div className="studio-glow" aria-hidden="true"/><div className="studio-grid" aria-hidden="true"/>
  <div className="studio-topline"><span>THE ART OF REMEMBERING</span><span>BATHINDA, PUNJAB · INDIA</span></div>
  <div className="studio-layout"><div className="studio-copy">
   <Reveal><p className="studio-eyebrow"><span/> PAINTER · EDUCATOR · RESEARCHER</p></Reveal>
   <Reveal delay={.12}><h1 className="studio-title">A life in art.<br/><em>A world</em><br/>in every stroke<span>.</span></h1></Reveal>
   <Reveal delay={.24}><p className="studio-description">I’m Gurpreet Singh. Through paint, portraiture and the stories of Punjab, I preserve what time leaves behind.</p></Reveal>
   <Reveal delay={.32} className="studio-actions"><Link to="/work" className="studio-primary">Explore the collection <ArrowUpRight size={20}/></Link><Link to="/about" className="studio-secondary">Meet the artist <ArrowRight size={17}/></Link></Reveal>
   <Reveal delay={.4}><div className="studio-signature">Gurpreet Singh <span>ARTIST, BATHINDA</span></div></Reveal>
  </div><div className="studio-gallery" onPointerMove={move} onPointerLeave={reset} onFocusCapture={() => setFocused(true)} onBlurCapture={e => { if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false) }}>
   <span className="gallery-coordinate" aria-hidden="true">A STUDY IN LIGHT, MEMORY & FORM</span><div className="gallery-orbit" aria-hidden="true"/>
   <motion.div className="gallery-scene" style={reduce || paused ? undefined : { rotateX, rotateY }}>
    {collection.map((item, index) => <OrbitFrame key={item.slug} item={item} index={index} active={active} phase={phase} />)}
   </motion.div><div className="gallery-floor" aria-hidden="true"/>
   <div className="gallery-caption"><div aria-live="off" aria-atomic="true"><span className="gallery-kicker">SELECTED PRACTICE / 0{active+1}</span><Link to={`/work/${current.slug}`}>{current.title} <ArrowUpRight size={19}/></Link></div><div className="gallery-controls"><button aria-label="Previous artwork" onClick={()=>step(-1)}><ArrowLeft size={18}/></button><button aria-label="Next artwork" onClick={()=>step(1)}><ArrowRight size={18}/></button></div></div>
  </div></div>
  <div className="studio-bottom"><a href="#selected-practice"><ArrowDown size={16}/> SCROLL TO EXPLORE</a><span>ROOTED IN PUNJAB. OPEN TO THE WORLD.</span><button onClick={()=>{setPaused(!paused);reset()}} aria-pressed={paused}>{paused?"RESUME":"PAUSE"} HERO MOTION <span aria-hidden="true">{paused?"▷":"Ⅱ"}</span></button></div>
 </section>
}


