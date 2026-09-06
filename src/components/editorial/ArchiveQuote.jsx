import { Reveal } from "../ui/reveal"

/**
 * The pause between the wall and the footer.
 *
 * One line from the artist set over the gold-on-black plate: light falling
 * from the left, the pavilions and their reflection held at the right. The
 * plate is a real image rather than drawn furniture, so the ornament, the
 * rules and the arc all come from the same hand.
 *
 * The quote is stored as two clauses so the break lands where the design puts
 * it on a wide screen, and collapses to natural wrapping below.
 */

/** The rule under the quote: a hairline through a small quatrefoil. */
const Ornament = () => (
  <svg className="ah-quote-rule" viewBox="0 0 240 16" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="ah-rule-l" gradientUnits="userSpaceOnUse" x1="0" y1="8" x2="96" y2="8">
        <stop offset="0" stopColor="currentColor" stopOpacity="0" />
        <stop offset="1" stopColor="currentColor" stopOpacity="0.95" />
      </linearGradient>
      <linearGradient id="ah-rule-r" gradientUnits="userSpaceOnUse" x1="144" y1="8" x2="240" y2="8">
        <stop offset="0" stopColor="currentColor" stopOpacity="0.95" />
        <stop offset="1" stopColor="currentColor" stopOpacity="0" />
      </linearGradient>
    </defs>
    <path d="M0 8h96" stroke="url(#ah-rule-l)" strokeWidth="1" />
    <path d="M144 8h96" stroke="url(#ah-rule-r)" strokeWidth="1" />
    <circle cx="103" cy="8" r="1.4" fill="currentColor" />
    <circle cx="137" cy="8" r="1.4" fill="currentColor" />
    <path
      d="M120 1c1.9 3.6 3.5 5.2 7.1 7-3.6 1.8-5.2 3.4-7.1 7-1.9-3.6-3.5-5.2-7.1-7 3.6-1.8 5.2-3.4 7.1-7Z"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinejoin="round"
    />
  </svg>
)

export const ArchiveQuote = ({ lines, attribution, index = [] }) => (
  <section className="ah-quote" aria-label="In the artist’s words">
    <img
      className="ah-quote-plate"
      src="/brand/quote-plate-1600.webp"
      srcSet="/brand/quote-plate-800.webp 800w, /brand/quote-plate-1600.webp 1600w"
      sizes="100vw"
      width={1600}
      height={900}
      alt=""
      loading="lazy"
      decoding="async"
      draggable={false}
    />
    <div className="ah-quote-scrim" aria-hidden="true" />

    <Reveal className="ah-quote-inner">
      <p className="ah-quote-mark" aria-hidden="true">
        “
      </p>
      <blockquote>
        <p className="ah-quote-text">
          <span className="ah-quote-line">“{lines[0]} </span>
          <span className="ah-quote-line">{lines[1]}”</span>
        </p>
      </blockquote>
      <Ornament />
      <p className="ah-quote-by">{attribution}</p>
    </Reveal>

    {index.length > 0 && (
      <ul className="ah-quote-index" aria-hidden="true">
        {index.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    )}
  </section>
)
