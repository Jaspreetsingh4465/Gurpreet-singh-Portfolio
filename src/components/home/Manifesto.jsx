import { Reveal, RevealImage } from "../ui/reveal"
import { Photo } from "../ui/photo"
import { manifesto } from "../../content/site"

const m = manifesto

/**
 * The page's central statement, and the entry into its single light zone.
 *
 * The dark sections above run gold on charcoal; from here to the end of the
 * record the ground is ivory and the accent holds. That inversion happens once
 * on the page, which is why this band carries no top border: it should read as
 * the paper starting, not as another section beginning.
 *
 * The statement sits left, the studio print sits right as a taped photograph,
 * slightly turned, and the two word-rails sit in the margin beyond it from
 * `xl` up.
 */
export const Manifesto = () => (
  <section className="relative overflow-hidden bg-ivory">
    <div className="mx-auto max-w-[84rem] px-6 pt-24 md:pt-28 lg:px-8 2xl:max-w-[100rem] 2xl:px-16">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-14">
        <div className="lg:pt-4">
          <Reveal>
            <div className="flex items-center gap-5">
              <span className="text-[11px] tracking-[0.3em] text-gold">{m.index}</span>
              <span className="h-px w-14 bg-gold/60" aria-hidden="true" />
              <span className="text-[11px] tracking-[0.32em] text-charcoal/60 uppercase">{m.eyebrow}</span>
            </div>

            <h2 className="display mt-8 max-w-[19ch] text-[clamp(2.2rem,3.6vw,3.4rem)] leading-[1.12] text-charcoal">
              {m.lead}{" "}
              <em className="pb-1 leading-[1.15] text-gold italic">{m.accent}</em>
              <span className="text-gold">.</span>
            </h2>

            <p className="mt-7 max-w-[52ch] text-[17px] leading-[1.75] text-charcoal/60">{m.body}</p>
          </Reveal>
        </div>

        {/* The studio print, taped down and slightly turned */}
        <div className="flex items-start justify-center gap-6 lg:justify-end lg:gap-8">
          <p className="font-script hidden w-[27%] shrink-0 -rotate-6 pt-2 text-[20px] leading-[1.35] text-charcoal/35 lg:block">
            {m.note}
          </p>

          <figure className="w-[78%] rotate-[2deg] bg-white p-3 shadow-[0_24px_50px_-24px_rgba(30,26,20,0.45)] sm:w-[62%] lg:mt-4 lg:w-auto lg:min-w-0 lg:flex-1">
            <RevealImage className="aspect-[4/5] w-full" curtain="bg-ivory">
              <Photo
                id={m.photo.id}
                alt={m.photo.alt}
                width={1600}
                sizes="(max-width: 1024px) 70vw, 420px"
                className="h-full w-full object-cover grayscale"
              />
            </RevealImage>
          </figure>

          <div aria-hidden="true" className="hidden shrink-0 pt-2 xl:block">
            {m.rails.map((rail, i) => (
              <ul
                key={rail[0]}
                className={`space-y-1.5 text-[9.5px] tracking-[0.26em] text-charcoal/45 uppercase ${i > 0 ? "mt-16 text-gold/80" : ""}`}
              >
                {rail.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)
