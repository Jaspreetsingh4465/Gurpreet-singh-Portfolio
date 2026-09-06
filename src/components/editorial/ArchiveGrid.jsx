import { ArrowRight, MagnifyingGlassPlus } from "@phosphor-icons/react"
import { RevealImage } from "../ui/reveal"
import { Photo } from "../ui/photo"

/**
 * The hang.
 *
 * Two plates to a row on a twelve-column field, in a two-row measure: a wide
 * plate and a narrow one, then a matched pair. The measure repeats down the
 * page, so the rhythm holds however many items the filter leaves behind, and
 * the wall never falls into a single repeated card size.
 *
 * Column spans and frame proportions are set in CSS (.ah-card:nth-child) so the
 * measure stays in one place. Within a row the frames stretch to a common
 * height, which is what keeps the caption rules aligned across the page.
 *
 * Every plate is a button: the whole card opens the viewer, and the loupe in
 * the corner is the visible affordance for it.
 */

const Loupe = () => (
  <span className="ah-loupe" aria-hidden="true">
    <MagnifyingGlassPlus size={17} weight="regular" />
  </span>
)

const Empty = () => (
  <p className="py-24 text-center text-[15px] text-ivory/50">
    Nothing under this filter yet. Choose another view.
  </p>
)

export const ArchiveGrid = ({ items, onOpen }) => {
  if (!items.length) return <Empty />

  return (
    <ul className="ah-hang">
      {items.map((item, i) => (
        <li key={item.id} className="ah-card">
          <button type="button" className="ah-card-btn" onClick={() => onOpen(i)}>
            <span className="ah-card-media">
              <RevealImage className="ah-frame" curtain="bg-charcoal">
                <Photo
                  id={item.id}
                  alt={item.alt}
                  width={1600}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 52vw, 640px"
                  priority={i < 2}
                />
              </RevealImage>
              <Loupe />
            </span>

            <span className="ah-card-foot">
              <span className="ah-card-lines">
                <span className="ah-card-caption">{item.caption}</span>
                <span className="ah-card-tag">{item.tags[0]}</span>
              </span>
              <span className="ah-card-arrow" aria-hidden="true">
                <ArrowRight size={16} weight="regular" />
              </span>
            </span>

            <span className="sr-only">View larger: {item.alt}</span>
          </button>
        </li>
      ))}
    </ul>
  )
}

/**
 * The same wall as a reading list: numbered, one line to an item, with a small
 * plate held at the left. It is the view for scanning what the archive holds
 * rather than looking at it.
 */
export const ArchiveList = ({ items, onOpen }) => {
  if (!items.length) return <Empty />

  return (
    <ol className="ah-list">
      {items.map((item, i) => (
        <li key={item.id}>
          <button type="button" className="ah-row" onClick={() => onOpen(i)}>
            <span className="ah-row-no">{String(i + 1).padStart(2, "0")}</span>
            <span className="ah-row-thumb">
              <Photo id={item.id} alt="" width={700} sizes="120px" />
            </span>
            <span className="ah-row-caption">{item.caption}</span>
            <span className="ah-row-tags">{item.tags.join(" · ")}</span>
            <span className="ah-row-arrow" aria-hidden="true">
              <ArrowRight size={16} weight="regular" />
            </span>
            <span className="sr-only">View larger: {item.alt}</span>
          </button>
        </li>
      ))}
    </ol>
  )
}
