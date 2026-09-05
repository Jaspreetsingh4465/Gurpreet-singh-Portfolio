/**
 * One <img> wrapper so every photo on the site gets the same treatment:
 * a WebP srcset, correct `sizes`, lazy-loading below the fold, and async decode.
 */
import { img, dims } from "../../content/site"

export const Photo = ({
  id,
  alt = "",
  className = "",
  width = 700,
  sizes = "(max-width: 640px) 100vw, 400px",
  priority = false,
}) => {
  const { src, srcSet } = img(id, { width })
  const [w, h] = dims[id] ?? []
  return (
    <img
      src={src}
      width={w}
      height={h}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      // The hero image is the LCP element, so tell the browser to fetch it first.
      fetchPriority={priority ? "high" : "auto"}
      decoding={priority ? "sync" : "async"}
      draggable={false}
    />
  )
}
