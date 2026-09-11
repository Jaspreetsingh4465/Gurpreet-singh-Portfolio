import { useEffect } from "react"
import { site } from "../../content/site"

/**
 * Per-page document metadata for a client-rendered site. Sets the title,
 * description, canonical and Open Graph tags on mount and when props change.
 * One H1 per page is the page component's responsibility.
 */
const setMeta = (selector, attrs) => {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement(attrs.rel ? "link" : "meta")
    document.head.appendChild(el)
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v))
}

export const Seo = ({ title, description, path = "/", image = "/gallery/opt/12-1600.webp", noIndex = false }) => {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${site.name}` : `${site.name}, Artist and Educator in Bathinda, Punjab`
    const url = `${site.url}${path}`
    document.title = fullTitle
    setMeta('meta[name="robots"]', { name: "robots", content: noIndex ? "noindex, follow" : "index, follow" })
    setMeta('meta[name="description"]', { name: "description", content: description })
    setMeta('link[rel="canonical"]', { rel: "canonical", href: url })
    setMeta('meta[property="og:title"]', { property: "og:title", content: fullTitle })
    setMeta('meta[property="og:description"]', { property: "og:description", content: description })
    setMeta('meta[property="og:url"]', { property: "og:url", content: url })
    setMeta('meta[property="og:image"]', { property: "og:image", content: `${site.url}${image}` })
    setMeta('meta[name="twitter:title"]', { name: "twitter:title", content: fullTitle })
    setMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description })
    setMeta('meta[name="twitter:image"]', { name: "twitter:image", content: `${site.url}${image}` })
  }, [title, description, path, image, noIndex])
  return null
}
