import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { Link, NavLink, useLocation } from "react-router"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { List, X, ArrowRight } from "@phosphor-icons/react"
import { nav, site, cta } from "../../content/site"

const ring = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-light"

export const SiteHeader = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const reduce = useReducedMotion()

  // Close the menu on navigation.
  useEffect(() => setOpen(false), [pathname])

  // Escape closes; body scroll locks while the overlay is up.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === "Escape" && setOpen(false)
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener("keydown", onKey)
    }
  }, [open])

  // Solid bar once the top of the page has scrolled away: a 1px sentinel and
  // an IntersectionObserver, so nothing runs per scroll frame.
  useEffect(() => {
    const sentinel = document.createElement("div")
    sentinel.style.cssText = "position:absolute;top:24px;left:0;width:1px;height:1px;pointer-events:none"
    document.body.prepend(sentinel)
    const observer = new IntersectionObserver(([e]) => setScrolled(!e.isIntersecting))
    observer.observe(sentinel)
    return () => {
      observer.disconnect()
      sentinel.remove()
    }
  }, [])

  const isHome = pathname === "/"
  const desktopLinks = nav.filter((l) => l.to !== "/")

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-500 ${
        scrolled || open || !isHome
          ? "border-gold/20 bg-charcoal/95 backdrop-blur-md"
          : "border-transparent bg-gradient-to-b from-charcoal/70 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-8 px-6 lg:px-8">
        <Link to="/" className={`shrink-0 leading-none ${ring}`} aria-label={`${site.name}, home`}>
          <img src="/brand/logo.png" alt={site.name} className="h-14 w-auto object-contain md:h-16" />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-5 lg:flex">
          {desktopLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative py-1 text-[12px] tracking-[0.14em] whitespace-nowrap uppercase transition-colors ${ring} ${
                  isActive ? "text-gold-light" : "text-ivory/55 hover:text-ivory"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-gold-light transition-[width] duration-300 ${isActive ? "w-full" : "w-0"}`}
                    aria-hidden="true"
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className={`hidden shrink-0 items-center gap-2 border border-gold px-4 py-2.5 text-[10.5px] font-medium tracking-[0.16em] whitespace-nowrap text-gold-light uppercase transition-colors hover:bg-gold hover:text-charcoal lg:inline-flex ${ring}`}
        >
          {cta.contact}
          <ArrowRight size={12} weight="bold" aria-hidden="true" />
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`relative z-50 p-1 text-ivory lg:hidden ${ring}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={26} /> : <List size={26} />}
        </button>
      </div>

      {/* Full-screen editorial menu: large serif links, one per line. Portalled
          to <body>: the header's backdrop-filter would otherwise turn this
          fixed overlay into a header-relative box and clip it. */}
      {createPortal(
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[45] flex flex-col bg-charcoal px-6 pt-24 pb-10 lg:hidden"
          >
            <div className="absolute top-0 right-0 left-0 flex h-20 items-center justify-between px-6">
              <img src="/brand/logo.png" alt={site.name} className="h-12 w-auto object-contain" />
              <button type="button" onClick={() => setOpen(false)} aria-label="Close menu" className={`p-1 text-ivory ${ring}`}>
                <X size={26} />
              </button>
            </div>
            <ol className="flex flex-1 flex-col justify-center gap-1">
              {nav.map((link, i) => (
                <motion.li
                  key={link.to}
                  initial={reduce ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.05 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `display block py-2 text-[clamp(2rem,9vw,3rem)] leading-tight ${ring} ${
                        isActive ? "text-gold-light" : "text-ivory hover:text-gold-light"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
            </ol>
            <Link
              to="/contact"
              className="block bg-gold px-5 py-4 text-center text-[12px] font-medium tracking-[0.16em] text-charcoal uppercase"
            >
              {cta.contact}
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>,
      document.body,
      )}
    </header>
  )
}
