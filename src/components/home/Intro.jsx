import { Link } from "react-router"
import { ArrowRight } from "@phosphor-icons/react"
import { Reveal, RevealImage } from "../ui/reveal"
import { Photo } from "../ui/photo"
import { about, practiceFeature } from "../../content/site"

const f = practiceFeature

/** The headline's final full stop is the only gold mark in the type. */
const GoldStop = ({ text }) => {
  const stopped = text.trimEnd().endsWith(".")
  return (
    <>
      {stopped ? text.trimEnd().slice(0, -1) : text}
      {stopped && <span className="text-gold">.</span>}
    </>
  )
}

/**
 * The opening statement of practice, built as one composition rather than a
 * text-beside-photo block: a numbered eyebrow, the headline, three paragraphs,
 * a framed call to action and a pull quote on the left; the studio photograph
 * running tall beside them; and a short numbered index of tools, places and
 * painting detail down the right.
 *
 * Two decorative rails sit outside the content grid and only appear from `2xl`
 * up, where there is room for them without crowding the index: the four words
 * of the practice down the left edge over a darkened studio frame, and the
 * caption down the right. They are absolutely positioned, so they never
 * compress the grid on a laptop.
 *
 * Below `lg` the composition unstacks in reading order — statement, then the
 * studio frame, then the three index frames as a row.
 */
export const Intro = () => (
  <section id="about" className="relative overflow-hidden border-b border-gold/15 bg-charcoal">
    {/* Left bleed rail: the studio, held far back so it reads as ground, not image. */}
    <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 hidden w-40 2xl:block">
      <Photo
        id={f.frames[0].photo.id}
        width={700}
        sizes="160px"
        className="h-full w-full object-cover opacity-30 grayscale-[0.35]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-charcoal/85 to-charcoal" />
      <div className="absolute bottom-28 left-8">
        <ul className="space-y-[0.55rem] text-[10.5px] tracking-[0.3em] text-gold uppercase">
          {f.words.map((w) => (
            <li key={w}>{w}</li>
          ))}
        </ul>
        <div className="mt-9 h-24 w-px bg-gradient-to-b from-gold/70 to-transparent" />
      </div>
    </div>

    {/* Right rail: the closing caption. */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute top-1/2 right-8 hidden w-28 -translate-y-1/2 2xl:block"
    >
      <p className="text-[10.5px] leading-[2.4] tracking-[0.28em] text-gold/70 uppercase">{f.caption}</p>
      <div className="mt-8 h-20 w-px bg-gradient-to-b from-gold/45 to-transparent" />
    </div>

    <div className="mx-auto max-w-[84rem] px-6 py-24 md:py-32 lg:px-8 2xl:max-w-[100rem] 2xl:pr-36 2xl:pl-44">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-10 xl:gap-12">
        {/* Statement */}
        <div>
          <Reveal>
            <div className="flex items-center gap-5">
              <span className="text-[11px] tracking-[0.3em] text-gold">{f.index}</span>
              <span className="h-px w-14 bg-gold/50" aria-hidden="true" />
              <span className="text-[11px] tracking-[0.32em] text-ivory/75 uppercase">{f.eyebrow}</span>
            </div>

            <h2 className="display mt-9 max-w-[15ch] text-[clamp(2.5rem,4.2vw,3.8rem)] leading-[1.06] text-ivory">
              <GoldStop text={about.heading} />
            </h2>
          </Reveal>

          <Reveal delay={0.08} className="mt-10 max-w-[54ch] space-y-7 text-[17px] leading-[1.85] text-ivory/60">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Reveal>

          <Reveal delay={0.14} className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-8">
            <Link
              to="/about"
              className="group inline-flex items-center gap-8 border border-gold/45 px-8 py-[1.15rem] text-[11.5px] tracking-[0.26em] text-ivory uppercase transition-colors duration-300 hover:border-gold hover:bg-gold/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-light"
            >
              {about.link}
              <ArrowRight
                size={15}
                aria-hidden="true"
                className="text-gold transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <span className="hidden h-24 w-px bg-ivory/15 sm:block" aria-hidden="true" />

            <figure className="max-w-[26ch]">
              <blockquote className="font-serif text-[16.5px] leading-[1.6] text-ivory/70 italic">
                “{f.quote.line}”
              </blockquote>
              <figcaption className="mt-3 flex items-center gap-4">
                <span className="h-px w-8 bg-gold/50" aria-hidden="true" />
                <span className="text-[10.5px] tracking-[0.26em] text-gold uppercase">{f.quote.attribution}</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* The studio frame and the index beside it */}
        <div className="grid gap-4 sm:gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.44fr)] lg:self-center">
          <figure className="relative">
            <RevealImage className="aspect-[3/4] w-full">
              <Photo
                id={f.lead.photo.id}
                alt={f.lead.photo.alt}
                width={1600}
                sizes="(max-width: 1024px) 100vw, 460px"
                className="h-full w-full object-cover"
              />
            </RevealImage>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-charcoal/70 to-transparent"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-charcoal/75 to-transparent"
            />

            <figcaption className="pointer-events-none absolute inset-0 p-6">
              <div className="text-[10.5px] leading-[2] tracking-[0.3em] text-ivory/90 uppercase">
                {f.lead.label.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
                <span className="block text-ivory/70">{f.lead.year}</span>
              </div>
              <div className="mt-5 h-10 w-px bg-gold" />

              <div className="absolute bottom-6 left-6 text-[10.5px] tracking-[0.28em] text-ivory/75">
                {f.lead.counter.current}
                <span className="text-ivory/35"> / {f.lead.counter.total}</span>
              </div>
            </figcaption>
          </figure>

          <ul className="grid grid-cols-3 gap-4 sm:gap-5 lg:h-full lg:grid-cols-1 lg:grid-rows-3">
            {f.frames.map((frame, i) => (
              <li key={frame.n} className="lg:h-full">
                <figure className="relative lg:h-full">
                  <RevealImage delay={0.06 * i} seed={i + 1} className="aspect-[4/3] w-full lg:aspect-auto lg:h-full">
                    <Photo
                      id={frame.photo.id}
                      alt={frame.photo.alt}
                      width={700}
                      sizes="(max-width: 1024px) 32vw, 220px"
                      className="h-full w-full object-cover"
                    />
                  </RevealImage>
                  <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center gap-3 bg-gradient-to-t from-charcoal/95 via-charcoal/55 to-transparent px-4 pt-10 pb-3">
                    <span className="text-[9px] tracking-[0.18em] text-ivory/90 uppercase sm:text-[9.5px] sm:tracking-[0.2em] lg:whitespace-nowrap">
                      {frame.label}
                    </span>
                    <span className="hidden h-px flex-1 bg-ivory/25 sm:block" aria-hidden="true" />
                    <span className="hidden text-[9.5px] tracking-[0.2em] text-ivory/55 sm:block">{frame.n}</span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
)
