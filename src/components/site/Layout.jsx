import { DepthProvider } from "./DepthProvider"
import { Outlet, ScrollRestoration, useLocation } from "react-router"
import { AnimatePresence } from "motion/react"
import { SiteHeader } from "./SiteHeader"
import { SiteFooter } from "./SiteFooter"
import { PageTransition } from "./PageTransition"

/**
 * Shared shell. AnimatePresence keys the page on pathname so one page fades
 * out before the next settles in; ScrollRestoration restores position on
 * back/forward and starts new pages at the top.
 *
 * AnimatePresence must not carry `initial={false}`. That flag is inherited by
 * every motion element in the subtree on the first mount, so each scroll
 * reveal on the landing page rendered at rest and then jumped to its start
 * state as it came into view. The first page skips its own entry fade inside
 * PageTransition instead, where the flag stops with that one element.
 */
export const Layout = () => {
  const { pathname } = useLocation()
  return (
    <DepthProvider><div className="bg-charcoal">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-70 focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-charcoal"
      >
        Skip to content
      </a>
      <div className="grain" aria-hidden="true" />
      <SiteHeader />
      <main id="main">
        <AnimatePresence mode="wait">
          <PageTransition key={pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>
      <SiteFooter />
      <ScrollRestoration />
    </div></DepthProvider>
  )
}


