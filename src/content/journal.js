/**
 * The Journal. No articles have been supplied, so `articles` is empty and the
 * page explains what the journal is for instead of showing invented titles.
 *
 * Article shape the routes support:
 *   { slug, title, date (ISO), category (key), cover: { id, alt }, excerpt,
 *     body: [paragraphs], related: [slug] }
 */

export const journalCategories = [
  { key: "art-practice", label: "Art & practice", desc: "Notes from the studio: materials, method and the slow business of looking." },
  { key: "punjab-heritage", label: "Punjab & heritage", desc: "Places, monuments, traditions and the people who keep them." },
  { key: "art-history", label: "Art history", desc: "Indian art history, Sikh art and iconography." },
  { key: "photography", label: "Photography", desc: "Birds, landscapes and the documentary record." },
  { key: "culture", label: "Culture", desc: "Theatre, literature, poetry and folk life." },
  { key: "observations", label: "Observations", desc: "Shorter pieces: something seen, something remembered." },
];

export const journalIntro = {
  heading: "Writing alongside the work",
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
