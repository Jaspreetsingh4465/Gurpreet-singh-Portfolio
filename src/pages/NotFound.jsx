import { Link } from "react-router"
import { Seo } from "../components/site/Seo"
import { Reveal } from "../components/ui/reveal"

export const NotFound = () => (
  <>
    <Seo title="Page not found" description="This page does not exist." path="/404" />
    <section className="flex min-h-[70vh] items-center bg-charcoal">
      <Reveal className="mx-auto max-w-3xl px-6 py-32 text-center">
        <p className="font-mono text-[13px] text-gold-light">404</p>
        <h1 className="display mt-6 text-[clamp(2.2rem,5vw,3.5rem)] text-ivory">This page is not in the archive.</h1>
        <p className="mt-6 text-[17px] text-ivory/60">The address may have changed, or the work has not been catalogued yet.</p>
        <Link to="/" className="mt-10 inline-block bg-gold px-8 py-4 text-[12px] font-medium tracking-[0.16em] text-charcoal uppercase focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-light">Return home</Link>
      </Reveal>
    </section>
  </>
)
