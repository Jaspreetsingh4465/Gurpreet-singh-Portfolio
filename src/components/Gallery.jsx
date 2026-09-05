import { RevealImage } from "./ui/reveal"
import { Section, SectionHeading } from "./ui/section"
import { Photo } from "./ui/photo"
import { gallery } from "../content/site"

/**
 * Three columns, each offset vertically against its neighbours, so the grid
 * reads as a hung wall rather than a spreadsheet. Distinct from the bento
 * above it.
 */
const OFFSET = ["lg:mt-0", "lg:mt-24", "lg:mt-12"]

export const Gallery = () => (
  <Section id="gallery">
    <SectionHeading title={gallery.heading} intro={gallery.intro} />

    <ul className="mt-14 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {gallery.photos.map((photo, i) => (
        <li key={photo.id} className={OFFSET[i % 3]}>
          <figure className="group">
            <RevealImage
              delay={(i % 3) * 0.08}
              className="aspect-[4/3] bg-charcoal-800"
            >
              <Photo
                id={photo.id}
                alt={photo.alt}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
              />
            </RevealImage>
            <figcaption className="mt-3.5 flex items-baseline gap-3 text-[13px] text-ivory/45 transition-colors duration-300 group-hover:text-ivory/75">
              <span className="h-px w-5 shrink-0 translate-y-[-0.3em] bg-gold/60" aria-hidden="true" />
              {photo.caption}
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  </Section>
)
