import { RevealImage, Reveal } from "../ui/reveal"
import { Photo } from "../ui/photo"
import { closing } from "../../content/site"

/**
 * The painting from the hero, seen properly this time: a full-bleed medium
 * crop with the artist out of frame. Detail (archive strip), then face (photo
 * essay), then this. The page ends on the work itself.
 */
export const Closing = () => (
  <section aria-label="Closing image" className="bg-charcoal">
    <figure>
      <RevealImage className="aspect-[16/9] w-full md:aspect-[21/9]">
        <Photo
          id={closing.photo.id}
          alt={closing.photo.alt}
          width={2400}
          sizes="100vw"
          className="h-full w-full object-cover"
        />
      </RevealImage>
      <Reveal>
        <figcaption className="mx-auto max-w-6xl px-6 py-5 text-[14px] text-ivory/45 lg:px-8">
          {closing.caption}
        </figcaption>
      </Reveal>
    </figure>
  </section>
)
