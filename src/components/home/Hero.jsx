import { useRef } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react"
import { Link } from "react-router"
import { ArrowRight } from "@phosphor-icons/react"
import { Reveal, RevealWords } from "../ui/reveal"
import { hero, cta, img, dims } from "../../content/site"

export const Hero = () => {
  const art = img(hero.photo.id, { width: 1600 })
  const ref = useRef(null)
  const reduce = useReducedMotion()

  // Slow drift on the photograph as the hero leaves, driven by a motion value
  // rather than a scroll listener.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "8%"])

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate flex min-h-[calc(100dvh-5rem)] flex-col justify-end overflow-hidden md:justify-center"
    >
      {/* The plate is wide, so at most viewports it crops only at the sides.
          Its anchor (in CSS, .home-hero-plate) keeps the head and turban in
          frame at every width: held right of centre on desktop, hard right on
          a phone where the frame is a narrow slice of the picture. The extra
          height is the room the scroll drift needs. */}
      <picture className="contents">
        {/* A phone shows a slice of the plate, so it gets a portrait cut of the
            same photograph, the artist and the painting's face, rather than
            the wide plate cropped down to nothing. */}
        <source
          media="(max-width: 767px)"
          srcSet="/gallery/opt/hero-tall-450.webp 450w, /gallery/opt/hero-tall-720.webp 720w"
          sizes="100vw"
        />
        <motion.img
          src={art.src}
          srcSet={art.srcSet}
          sizes="100vw"
          width={dims[hero.photo.id][0]}
          height={dims[hero.photo.id][1]}
          alt={hero.photo.alt}
          fetchPriority="high"
          decoding="sync"
          style={reduce ? undefined : { y }}
          className="home-hero-plate absolute inset-0 -z-20 h-[108%] w-full object-cover"
        />
      </picture>

      {/* The scrim is lighter over the painting than before so it stays part of
          the picture; the left third is where the type needs the contrast. */}
      <div
        className="absolute inset-0 -z-10 hidden md:block"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(90deg, rgba(14,12,10,.94) 0%, rgba(14,12,10,.82) 30%, rgba(14,12,10,.3) 58%, rgba(14,12,10,0) 100%), linear-gradient(180deg, rgba(14,12,10,.5) 0%, rgba(14,12,10,0) 30%, rgba(14,12,10,.65) 100%)",
        }}
      />
      <div
        className="absolute inset-0 -z-10 md:hidden"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(180deg, rgba(14,12,10,.28) 0%, rgba(14,12,10,.42) 34%, rgba(14,12,10,.9) 62%, rgba(14,12,10,.97) 100%)",
        }}
      />

      <div className="px-6 pt-20 pb-20 md:px-16 md:pb-16 lg:px-20">
        <div className="max-w-2xl">
          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12px] font-medium tracking-[0.3em] text-gold-light uppercase"
          >
            {hero.eyebrow}
          </motion.p>

          <h1 className="display mt-7 max-w-[14ch] text-[clamp(3rem,6.2vw,5rem)] leading-[1.04] text-ivory">
            <RevealWords text={hero.title} delay={0.15} accentFrom={2} />
          </h1>

          <Reveal delay={0.6}>
            <p className="mt-8 max-w-[44ch] text-[17px] leading-[1.75] font-light text-ivory/78 md:text-lg">
              {hero.body}
            </p>
          </Reveal>

          <Reveal delay={0.72} className="mt-11 flex flex-wrap gap-4">
            <Link
              to="/work"
              className="group inline-flex items-center gap-2.5 bg-gold px-8 py-4 text-[12px] font-medium tracking-[0.16em] text-charcoal uppercase transition-transform hover:-translate-y-px active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-light"
            >
              {cta.work}
              <ArrowRight size={14} weight="bold" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center border border-ivory/35 px-8 py-4 text-[12px] font-medium tracking-[0.16em] text-ivory uppercase transition-colors hover:border-gold-light hover:text-gold-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-light"
            >
              {cta.about}
            </Link>
          </Reveal>
        </div>
      </div>

      <Reveal delay={1.1} className="pointer-events-none absolute bottom-8 left-6 md:left-16">
        <span className="flex items-center gap-3 text-[10px] tracking-[0.28em] text-ivory/45 uppercase">
          Scroll to discover
          <span aria-hidden="true" className="h-px w-8 bg-ivory/30" />
        </span>
      </Reveal>
    </section>
  )
}
