import { useState } from "react"
import { Pause, Play } from "@phosphor-icons/react"
import { Reveal } from "../ui/reveal"
import { Photo } from "../ui/photo"
import { archive } from "../../content/site"

/**
 * Six chosen frames under one heading, not a thumbnail carousel. Every frame
 * shares the same 4:3 crop and the same grade, and carries a one-word label
 * under it. The strip moves slowly (the page's only marquee) and can be
 * stopped: hover pauses it, and the button beside the heading pauses it for
 * keyboard and touch users too.
 */
export const ArchiveStrip = () => {
  const [paused, setPaused] = useState(false)

  return (
    <section aria-labelledby="archive-heading" className="border-y border-gold/15 bg-charcoal-800 py-16 md:py-20">
      <Reveal className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-4">
          <h2 id="archive-heading" className="display text-[clamp(1.75rem,3vw,2.4rem)] text-ivory">
            {archive.heading}
          </h2>
          <div className="flex items-end gap-6">
            <p className="max-w-[46ch] text-[16px] leading-relaxed text-ivory/55">{archive.intro}</p>
            <button
              type="button"
              onClick={() => setPaused((v) => !v)}
              aria-pressed={paused}
              aria-label={paused ? "Play the archive strip" : "Pause the archive strip"}
              className="mb-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center border border-ivory/25 text-ivory/70 transition-colors hover:border-gold-light hover:text-gold-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-light"
            >
              {paused ? <Play size={14} weight="fill" aria-hidden="true" /> : <Pause size={14} weight="fill" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </Reveal>

      <div className="group relative mt-10 w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_4%,black_96%,transparent)]">
        <ul
          style={paused ? { animationPlayState: "paused" } : undefined}
          className="flex w-max animate-[filmstrip_70s_linear_infinite] gap-6 pr-6 group-hover:[animation-play-state:paused] motion-reduce:animate-none"
        >
          {[0, 1].map((pass) =>
            archive.frames.map((f) => (
              <li
                key={`${f.id}-${pass}`}
                aria-hidden={pass === 1 ? "true" : undefined}
                className="w-64 shrink-0 sm:w-72"
              >
                <figure>
                  <div className="aspect-[4/3] overflow-hidden">
                    <Photo id={f.id} alt={pass === 1 ? "" : f.alt} sizes="288px" className="h-full w-full object-cover" />
                  </div>
                  <figcaption className="mt-3 text-[12px] tracking-[0.18em] text-ivory/45 uppercase">
                    {f.label}
                  </figcaption>
                </figure>
              </li>
            )),
          )}
        </ul>
      </div>
    </section>
  )
}
