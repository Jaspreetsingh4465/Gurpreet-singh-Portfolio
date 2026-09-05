import { Outlet, ScrollRestoration, useLocation } from "react-router"
import { AnimatePresence } from "motion/react"
import { SiteHeader } from "./SiteHeader"
import { SiteFooter } from "./SiteFooter"
import { PageTransition } from "./PageTransition"

/**
 * Shared shell. AnimatePresence keys the page on pathname so one page fades
 * out before the next settles in; ScrollRestoration restores position on
 * back/forward and starts new pages at the top.
 */
export const Layout = () => {
  const { pathname } = useLocation()
  return (
    <div className="bg-charcoal">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-70 focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-charcoal"
      >
        Skip to content
      </a>
      <div className="grain" aria-hidden="true" />
      <SiteHeader />
      <main id="main">
        <AnimatePresence mode="wait" initial={false}>
          <PageTransition key={pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>
      <SiteFooter />
      <ScrollRestoration />
    </div>
  )
}
