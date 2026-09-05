import { icons } from "../ui/icons"
import { socials } from "../../content/contact"
import { site } from "../../content/site"

/**
 * Renders only profiles that have a real URL. With none configured it renders
 * nothing, so no dead links ever ship.
 */
export const SocialLinks = ({ className = "", tone = "dark" }) => {
  const live = socials.filter((s) => s.href)
  if (!live.length) return null
  return (
    <ul className={`flex gap-5 ${className}`}>
      {live.map(({ network, href, label }) => {
        const Icon = icons[network]
        return (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${site.name} on ${label}`}
              className={`inline-flex transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-light ${
                tone === "light" ? "text-charcoal/50 hover:text-gold" : "text-ivory/45 hover:text-gold-light"
              }`}
            >
              <Icon size={19} weight="light" aria-hidden="true" />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
