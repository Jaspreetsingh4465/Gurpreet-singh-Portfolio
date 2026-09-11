import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { useSceneMotion } from "../site/DepthProvider"
import { Reveal, RevealWords } from "../ui/reveal"

/**
 * Internal-page opener. Dark ground, an optional eyebrow (the page's one and
 * only), the H1, and a short lead. Never a background image: internal pages
 * open on type so the home hero stays the only cinematic opener.
 */
export const PageHero = ({ eyebrow, title, lead, sub, tone = "dark" }) => {
  const light = tone === "light"
  const ref = useRef(null)
  const reduce = useSceneMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45])
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])
  return (
    <section ref={ref} className={`depth-page-hero ${light ? "bg-ivory" : "bg-charcoal"} border-b ${light ? "border-charcoal/12" : "border-gold/15"}`}>
      <motion.div className="page-orbits" aria-hidden="true" style={reduce ? undefined : { rotate, y }}><i /><i /><i /></motion.div>
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-24 pb-20 md:pt-32 md:pb-28 lg:px-8">
        {eyebrow && (
          <Reveal>
            <p className={`text-[12px] font-medium tracking-[0.3em] uppercase ${light ? "text-gold" : "text-gold-light"}`}>
              {eyebrow}
            </p>
          </Reveal>
        )}
        <h1
          className={`display mt-6 max-w-[18ch] text-[clamp(2.6rem,6vw,4.75rem)] leading-[1.04] text-balance ${
            light ? "text-charcoal" : "text-ivory"
          }`}
        >
          <RevealWords text={title} delay={0.1} />
        </h1>
        {sub && (
          <Reveal delay={0.45}>
            <p className={`mt-6 text-[15px] tracking-[0.12em] uppercase ${light ? "text-charcoal/55" : "text-ivory/55"}`}>{sub}</p>
          </Reveal>
        )}
        {lead && (
          <Reveal delay={0.55}>
            <p className={`mt-8 max-w-[56ch] text-[17px] leading-[1.75] md:text-lg ${light ? "text-charcoal/65" : "text-ivory/70"}`}>
              {lead}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  )
}


