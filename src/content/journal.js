/**
 * The Journal. No articles have been supplied, so `articles` is empty and the
 * page explains what the journal is for instead of showing invented titles.
 *
 * Article shape the routes support:
 *   { slug, title, date (ISO), category (key), cover: { id, alt }, excerpt,
 *     body: [paragraphs], related: [slug] }
 */

export const journalCategories = [
  { key: "art-practice", n: "01", label: "Art & practice", desc: "Notes from the studio: materials, method and the slow business of looking.", photo: { id: 7, alt: "Gurpreet Singh working close to the canvas with a fine brush" } },
  { key: "punjab-heritage", n: "02", label: "Punjab & heritage", desc: "Places, monuments, traditions and the people who keep them.", photo: { id: "places", alt: "A weathered haveli courtyard seen through an open studded door" } },
  { key: "art-history", n: "03", label: "Art history", desc: "Indian art history, Sikh art and iconography.", photo: { id: "16-face", alt: "Painted detail of a face beneath a jewelled turban" } },
  { key: "photography", n: "04", label: "Photography", desc: "Birds, landscapes and the documentary record.", photo: { id: "14-vale", alt: "A wooded hillside above a stream" } },
  { key: "culture", n: "05", label: "Culture", desc: "Theatre, literature, poetry and folk life.", photo: { id: "5-stage", alt: "Folk performers mid-dance on a lit stage" } },
  { key: "observations", n: "06", label: "Observations", desc: "Shorter pieces: something seen, something remembered.", photo: { id: "15-studio", alt: "Gurpreet Singh drawing at his table" } },
];

/**
 * The frame around the journal page: the hero, the marginal notes and rails,
 * and the line that closes the page. `journalIntro` keeps the two paragraphs
 * that explain what the journal is for.
 */
export const journalPage = {
  hero: {
    eyebrow: "Journal",
    title: { lead: "Writing alongside", accent: "the work" },
    lead: "Essays, notes and observations on painting, Punjab, art history and photography.",
    words: ["Thoughts", "Process", "Places", "People"],
    note: "Same places. Different times. Always a story.",
    rail: ["Art", "Places", "People", "Culture", "Memory"],
    photo: { id: "tools", alt: "Worn brushes in a jar beside pigment pots and a loaded palette" },
  },
  intro: {
    index: "01",
    cta: "Explore the writings",
    photo: { id: 1, alt: "Gurpreet Singh reading among stacked books in window light" },
    note: "The desk where the writing, like the drawing, begins.",
    strip: ["Notes", "Essays", "Reflections"],
    rail: ["A continuing", "visual", "record"],
  },
  threads: {
    index: "02",
    heading: "What the journal will hold",
    intro: "Six threads. Pieces will be filed under one of these as they are published.",
    rail: ["Different", "threads", "a shared", "journey"],
  },
  closing: {
    line: "Art is a way of keeping people, places and moments alive.",
    attribution: "Gurpreet Singh",
    note: ["Places.", "People.", "Moments.", "Always a story."],
    photo: { id: 19, alt: "A wide view of a gallery hall during an exhibition" },
  },
};

export const journalIntro = {
  heading: "Another way of keeping the record.",
  paragraphs: [
    "Gurpreet Singh writes poetry and articles on a variety of subjects, and painting, " +
      "photography and writing have each become means of recording a region whose " +
      "cultural character continues to change.",
    "This journal will gather that writing: essays on practice and on Punjab, notes on " +
      "art history and iconography, photographs with their stories, and shorter " +
      "observations. Pieces will appear here as they are prepared for publication.",
  ],
};

export const articles = [];
