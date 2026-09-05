import { Reveal } from "../ui/reveal"

/** A measured column of prose. `tone` follows the section it sits in. */
export const EditorialText = ({ paragraphs, tone = "dark", className = "", delay = 0.08 }) => (
  <Reveal
    delay={delay}
    className={`space-y-6 text-[17px] leading-[1.8] ${tone === "light" ? "text-charcoal/70" : "text-ivory/65"} ${className}`}
  >
    {paragraphs.map((p) => (
      <p key={p.slice(0, 32)} className="max-w-[58ch]">
        {p}
      </p>
    ))}
  </Reveal>
)
