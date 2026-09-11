import "./brand-screens.css"

export const BrandLogo = ({ className = "" }) => (
  <img className={`brand-screen-logo ${className}`} src="/brand/logo.png"
    alt="Gurpreet Singh — painter, art educator and researcher"
    width={2125} height={706} decoding="async" fetchPriority="high" />
)

/** Shared by first-load and route-change screens; the line is indeterminate. */
export const BrandScreen = ({ message = "Opening the gallery…", overlay = false }) => (
  <div className={`brand-screen ${overlay ? "brand-screen-overlay" : ""}`} role="status" aria-live="polite" aria-atomic="true">
    <div className="brand-screen-orbit" aria-hidden="true" />
    <div className="brand-screen-content">
      <BrandLogo />
      <p className="brand-screen-motto">A life in art. A world in every stroke.</p>
      <div className="brand-screen-line" aria-hidden="true"><span /></div>
      <p className="brand-screen-status">{message}</p>
    </div>
    <span className="brand-screen-location" aria-hidden="true">BATHINDA, PUNJAB · INDIA</span>
  </div>
)
