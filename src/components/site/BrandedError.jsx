import { Link } from "react-router"
import { ArrowClockwise, ArrowRight, ArrowUpRight } from "@phosphor-icons/react"
import { BrandLogo } from "./BrandScreen"
import { Seo } from "./Seo"
import { Photo } from "../ui/photo"

const messages = {
  "not-found": {
    code: "404", label: "Page not found", title: "A little outside the frame.",
    description: "This page isn’t in the collection. The address may have changed, but there’s still plenty of art to discover.",
    note: "A different path. A new perspective.",
  },
  unavailable: {
    code: "503", label: "Page unavailable", title: "The gallery needs another moment.",
    description: "This page didn’t finish loading. Try again, or return to the home page to continue exploring.",
    note: "The stories are worth coming back to.",
  },
  unexpected: {
    code: "500", label: "Something went wrong", title: "An unexpected pause in the story.",
    description: "Something interrupted this page. Please try loading it again, or return to the home page.",
    note: "We’ll find our way back to the art.",
  },
}

/** Plain links in a fatal fallback can recover even if client routing failed. */
const RecoveryLink = ({ standalone, to, ...props }) => standalone
  ? <a href={to} {...props} />
  : <Link to={to} {...props} />

export const BrandedError = ({ kind = "not-found", standalone = false, status }) => {
  const content = messages[kind] ?? messages.unexpected
  const missing = kind === "not-found"
  return (
    <>
      <Seo title={content.label} description={content.description} path={missing ? "/404" : "/error"} noIndex />
      <section className={`branded-error ${standalone ? "branded-error-standalone" : ""}`} aria-labelledby="error-title">
        <div className="branded-error-layout">
          <div className="branded-error-copy">
            <RecoveryLink standalone={standalone} to="/" className="branded-error-logo" aria-label="Gurpreet Singh, home"><BrandLogo /></RecoveryLink>
            <p className="branded-error-eyebrow">GURPREET SINGH <span aria-hidden="true">/</span> {content.label}</p>
            <h1 id="error-title">{content.title}</h1>
            <p className="branded-error-description">{content.description}</p>
            <div className="branded-error-actions">
              {missing ? (
                <RecoveryLink standalone={standalone} to="/" className="branded-error-primary">Return home <ArrowRight size={18} aria-hidden="true" /></RecoveryLink>
              ) : (
                <button type="button" className="branded-error-primary" onClick={() => window.location.reload()}>Try again <ArrowClockwise size={18} aria-hidden="true" /></button>
              )}
              <RecoveryLink standalone={standalone} to={missing ? "/work" : "/"} className="branded-error-secondary">{missing ? "Explore the collection" : "Return home"} <ArrowUpRight size={18} aria-hidden="true" /></RecoveryLink>
            </div>
          </div>
          <div className="branded-error-art" aria-hidden="true">
            <span className="branded-error-orbit" />
            <div className="branded-error-print"><Photo id="12-face" priority sizes="(max-width: 760px) 180px, 260px" /></div>
            <span className="branded-error-code">{status ?? content.code}</span>
            <span className="branded-error-art-label">A MOMENT OUT OF THE FRAME</span>
          </div>
          <div className="branded-error-bottom"><p>{content.note}</p><span>ART PRESERVES WHAT MATTERS</span></div>
        </div>
      </section>
    </>
  )
}
