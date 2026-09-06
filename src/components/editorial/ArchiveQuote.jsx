import { Reveal } from "../ui/reveal"

/**
 * The pause between the wall and the footer.
 *
 * A drawn monument sits behind the words at the right edge, held at a low
 * enough opacity to read as watermark rather than illustration: the building
 * the archive keeps returning to, put down in line only.
 */
const Monument = () => {
  const arches = Array.from({ length: 9 }, (_, i) => 96 + i * 52)
  return (
    <svg className="ah-quote-art" viewBox="0 0 640 360" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
        {/* ground and plinth */}
        <path d="M20 336h600M56 336v-30h528v30" />
        <path d="M70 306h500" />

        {/* the arcade */}
        {arches.map((x) => (
          <path key={x} d={`M${x - 18} 306v-38a18 18 0 0 1 36 0v38`} />
        ))}

        {/* drum and the great dome */}
        <path d="M236 268h168M248 268v-30h144v30" />
        <path d="M252 238c0-64 136-64 136 0" />
        <path d="M262 238c0-52 116-52 116 0" opacity="0.7" />
        <path d="M320 174v-26M320 148l-9 9 9 9 9-9-9-9Z" />
        <path d="M320 130v-14" />

        {/* flanking pavilions */}
        {[150, 490].map((cx) => (
          <g key={cx}>
            <path d={`M${cx - 44} 306v-58M${cx + 44} 306v-58M${cx - 22} 306v-58M${cx + 22} 306v-58`} />
            <path d={`M${cx - 50} 248h100`} />
            <path d={`M${cx - 38} 248c0-42 76-42 76 0`} />
            <path d={`M${cx} 206v-18M${cx} 188l-6 6 6 6 6-6-6-6Z`} />
          </g>
        ))}

        {/* corner minarets */}
        {[40, 600].map((cx) => (
          <g key={cx}>
            <path d={`M${cx - 12} 336v-152h24v152`} />
            <path d={`M${cx - 12} 216h24M${cx - 12} 258h24`} opacity="0.6" />
            <path d={`M${cx - 16} 184c0-26 32-26 32 0`} />
            <path d={`M${cx} 158v-14`} />
          </g>
        ))}
      </g>
    </svg>
  )
}

export const ArchiveQuote = ({ text, attribution }) => (
  <section className="ah-quote" aria-label="In the artist’s words">
    <Monument />
    <Reveal className="ah-quote-inner">
      <p className="ah-quote-mark" aria-hidden="true">
        “
      </p>
      <blockquote>
        <p className="ah-quote-text">“{text}”</p>
      </blockquote>
      <div className="ah-quote-rule" aria-hidden="true" />
      <p className="ah-quote-by">{attribution}</p>
    </Reveal>
  </section>
)
