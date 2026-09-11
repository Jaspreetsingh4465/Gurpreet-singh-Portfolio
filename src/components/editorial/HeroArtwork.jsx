import { useRef } from "react"
import { useInView } from "motion/react"
import { useSceneMotion } from "../site/DepthProvider"
import { Photo } from "../ui/photo"
import { Tilt } from "../ui/Tilt"
import "./hero-artwork.css"

/** Photos are visible from the first render; motion never gates their reveal. */
export const HeroArtwork = ({ artwork }) => {
  const ref = useRef(null)
  const visible = useInView(ref, { amount: .1 })
  const reduce = useSceneMotion()

  return (
    <figure ref={ref} className={`hero-artwork ${artwork.landscape ? "hero-artwork-wide" : ""} ${visible && !reduce ? "hero-artwork-moving" : ""}`}>
      <div className="hero-artwork-halo" aria-hidden="true" />
      <Tilt className="hero-artwork-stage">
        <div className="hero-artwork-frame hero-artwork-main">
          <Photo {...artwork.main} priority sizes="(max-width: 760px) 66vw, (max-width: 1000px) 430px, 36vw" />
          <span className="hero-artwork-edge" aria-hidden="true">GURPREET SINGH / SELECTED ARCHIVE</span>
        </div>
        <div className="hero-artwork-frame hero-artwork-detail">
          <Photo {...artwork.detail} sizes="(max-width: 760px) 35vw, 200px" />
        </div>
        <div className="hero-artwork-frame hero-artwork-inset">
          <Photo {...artwork.inset} sizes="(max-width: 760px) 24vw, 150px" />
        </div>
      </Tilt>
      <figcaption className="hero-artwork-caption">
        <span>{artwork.label}</span>
        <p>{artwork.note}</p>
      </figcaption>
    </figure>
  )
}
