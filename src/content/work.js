/**
 * The Work section. Categories are real and source-supported. Individual
 * artworks are NOT yet catalogued: `artworks` is empty on purpose and the
 * detail route renders a content-ready template from this shape. Do not add
 * titles, years or dimensions here that have not been supplied by the artist.
 */

export const workCategories = [
  { slug: "portraiture", title: "Portraiture", desc: "Expression, character and the suggestion of a lived life, in oil and in charcoal.", photo: { id: 8, alt: "Portrait study of a young man in a peach turban" } },
  { slug: "historical", title: "Historical work", desc: "Narratives from Punjab’s past, including the period of Maharaja Ranjit Singh, brought into a human context.", photo: { id: "12-paint", alt: "Oil painting of Maharaja Ranjit Singh with a lion" } },
  { slug: "cultural", title: "Cultural art", desc: "Sikh history, Punjabi tradition, architecture and the changing landscape of the region.", photo: { id: 5, alt: "Folk performers on a lit stage" } },
  { slug: "landscape", title: "Landscape", desc: "Atmosphere, light and the particular character of a place.", photo: { id: 14, alt: "A figure on a forest trail" } },
  { slug: "drawing", title: "Drawing", desc: "The foundation of the work and of the teaching.", photo: { id: "15-studio", alt: "The artist drawing at his drafting table" } },
  { slug: "photography", title: "Photography", desc: "A documentary record: native birds, landscapes, people and place.", photo: { id: 1, alt: "The artist reading by a window among stacked books" } },
  { slug: "hyperrealism", title: "Hyperrealism", desc: "Detail pursued until the painted surface holds as much as the eye.", photo: { id: 16, alt: "A hyperreal portrait of a young maharaja on the easel" } },
  { slug: "neo-surrealism", title: "Neo-surrealism", desc: "Familiar things arranged so that they ask a question.", photo: { id: 4, alt: "A painting of animals on a red ground, with the artist beside it" } },
];

/**
 * Artwork records. Fields the detail template supports:
 *   slug, title, year, medium, dimensions, category (slug), description,
 *   story, images: [{ id, alt }], detail: { id, alt }, related: [slug]
 * Empty until the artist supplies metadata.
 */
export const artworks = [];

/** Shape used by the Artwork template when a record is missing a field. */
export const PENDING = "To be added";
