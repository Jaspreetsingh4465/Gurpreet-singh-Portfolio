import { Link } from "react-router"
import { nav, site } from "../../content/site"
import { SocialLinks } from "../editorial/SocialLinks"

const ring = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-light"

export const SiteFooter = () => (
  <footer className="border-t border-gold/15 bg-charcoal-800">
    <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
      <div className="grid gap-14 md:grid-cols-[1.3fr_0.7fr_1fr]">
        <div>
          <img src="/brand/logo.png" alt={site.name} className="h-20 w-auto object-contain" />
          <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-ivory/50">{site.tagline}</p>
          <SocialLinks className="mt-7" />
        </div>

        <nav aria-label="Footer">
          <h2 className="text-[11px] tracking-[0.26em] text-ivory/40 uppercase">Pages</h2>
          <ul className="mt-6 space-y-3">
            {nav.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className={`text-[15px] text-ivory/60 transition-colors hover:text-ivory ${ring}`}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-[11px] tracking-[0.26em] text-ivory/40 uppercase">Studio</h2>
          <p className="mt-6 text-[15px] leading-relaxed text-ivory/60">{site.location}</p>
          <p className="mt-3 text-[15px] leading-relaxed text-ivory/60">
            Exhibitions, workshops, commissions and research conversations:{" "}
            <Link to="/contact" className={`text-gold-light transition-colors hover:text-gold ${ring}`}>
              enquire here
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-3 border-t border-ivory/10 pt-7 text-[13px] text-ivory/40 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <p>{site.professionalName}</p>
      </div>
    </div>
  </footer>
)
