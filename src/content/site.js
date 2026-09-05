/**
 * Single source of truth for every piece of copy and every photograph on the
 * page. Edit here, not inside the components.
 *
 * One emotional idea runs through the whole page: the work is an act of
 * remembering. Hero > intro > archive > photo essay > manifesto > the work >
 * record > closing image > invitation. Each section’s heading is a line in
 * that one story rather than a template label.
 *
 * Images live at /gallery/opt/<id>-<width>.webp. Every file there has been
 * put through the same grade (desaturated, warm blacks, muted highlights,
 * grain) so the photographs read as one archive. Originals in /gallery/*.jpg
 * are untouched. Ids ending in a word (12-lion, 15-studio) are crops.
 */

const OPT = "/gallery/opt";

/** Intrinsic pixel size of every source, so <img> can carry width/height. */
export const dims = {
  1: [5344, 3840],
  2: [5040, 2856],
  3: [4928, 3264],
  4: [4928, 3264],
  5: [848, 608],
  6: [804, 652],
  7: [667, 667],
  8: [949, 960],
  9: [800, 600],
  10: [800, 600],
  11: [800, 600],
  12: [5032, 3840],
  13: [1516, 2213],
  14: [1220, 2111],
  15: [5760, 3840],
  16: [2524, 3661],
  17: [820, 983],
  18: [640, 424],
  19: [936, 357],
  "12-lion": [1913, 2151],
  "12-face": [906, 1152],
  "12-paint": [3120, 1755],
  "15-studio": [2880, 3840],
};

export const img = (id, { width = 700 } = {}) => ({
  src: `${OPT}/${id}-${width}.webp`,
  srcSet: `${OPT}/${id}-700.webp 700w, ${OPT}/${id}-1600.webp 1600w`,
});

export const site = {
  name: "Gurpreet Singh",
  professionalName: "Gurpreet Artist Bathinda",
  role: "Painter, Art Educator, Researcher",
  location: "Bathinda, Punjab, India",
  tagline: "Painting the people, places and stories of Punjab.",
  url: "https://gurpreetartist.com",
};

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/work", label: "Work" },
  { to: "/archive", label: "Archive" },
  { to: "/exhibitions", label: "Exhibitions" },
  { to: "/achievements", label: "Achievements" },
  { to: "/journal", label: "Journal" },
  { to: "/contact", label: "Contact" },
];

/** One CTA label per intent, used everywhere on the page. */
export const cta = {
  contact: "Enquire",
  work: "Explore the work",
  about: "About the artist",
};

export const hero = {
  eyebrow: "Painting • Portraiture • Heritage",
  title: "Stories, preserved in colour.",
  body:
    "Through portraiture, painting and photography, I document the people, places " +
    "and traditions that shape Punjab’s visual memory.",
  photo: {
    id: 12,
    alt: "Gurpreet Singh holding a palette and brush beside his oil painting of Maharaja Ranjit Singh with a lion",
  },
};

/** Figures the bio-data supports. No invented counts. */
export const stats = [
  { value: "30+", label: "Years of artistic engagement" },
  { value: "25+", label: "Years teaching Fine Arts" },
  { value: "18", label: "Awards and honours" },
  { value: "4", label: "Countries exhibited in" },
];

/**
 * The archive strip: six frames chosen to span the practice, in a fixed
 * order (archival, painting detail, portrait, gathering, landscape, at work).
 */
export const archive = {
  heading: "The archive",
  intro: "A growing visual record of people, places, objects and moments.",
  frames: [
    { id: 1, alt: "Gurpreet Singh reading among stacked canvases, black and white", label: "Archival" },
    { id: "12-lion", alt: "Detail of a lion from an oil painting", label: "Painting detail" },
    { id: 10, alt: "Three artists standing together outside a venue", label: "Portrait" },
    { id: 6, alt: "A staged folk performance in traditional dress", label: "Gathering" },
    { id: 14, alt: "A figure walking a forest trail", label: "Landscape" },
    { id: 7, alt: "Gurpreet Singh painting at the easel", label: "At work" },
  ],
};

export const about = {
  heading: "Art rooted in people, place and history.",
  paragraphs: [
    "My work begins with observation: of faces, memories, landscapes and the quiet " +
      "details that often disappear with time.",
    "Through painting, portraiture and photography, I explore the relationship " +
      "between identity and place, creating visual records of stories that deserve " +
      "to remain visible.",
    "The work is both personal and archival: a way of remembering where we come " +
      "from while looking at how that history continues to shape us.",
  ],
  link: "Read my story",
  photo: {
    id: "15-studio",
    alt: "Gurpreet Singh at his drafting table in the studio, drawing, black and white",
  },
};

export const featured = {
  heading: "Where people become stories",
  intro:
    "Faces, celebrations, landscapes and fleeting moments, collected through years " +
    "of looking, listening and documenting.",
  lead: {
    photo: { id: 8, alt: "Portrait study of a young man in a peach turban and blue jacket" },
    caption: "Portrait study",
  },
  categories: [
    {
      title: "Portraits",
      desc: "Faces carrying memory, character and time.",
      photo: { id: 16, alt: "Gurpreet Singh at the easel, painting a portrait of a young maharaja in a yellow robe" },
    },
    {
      title: "Cultural life",
      desc: "Celebrations, rituals and everyday moments that connect generations.",
      photo: { id: 5, alt: "Folk performers lifted mid-dance on a lit stage" },
    },
    {
      title: "Places and landscapes",
      desc: "The architecture, streets and landscapes that give these stories a sense of place.",
      photo: { id: 11, alt: "A gallery interior hung with paintings" },
    },
  ],
};

/** Four large frames, deliberately unequal. */
export const essay = {
  heading: "People. Places. Memory.",
  intro: "Every photograph holds a moment. Together, they form a record of a culture in motion.",
  frames: [
    {
      n: "01",
      label: "People",
      photo: { id: 17, alt: "Gurpreet Singh in a shawl, listening to an elder in conversation" },
    },
    {
      n: "02",
      label: "Place",
      photo: { id: 2, alt: "Artists gathered before a wall of paintings at a gallery opening" },
    },
    {
      n: "03",
      label: "Tradition",
      photo: { id: 3, alt: "An award presentation on stage at the Lalit Kala Akademi" },
    },
    {
      n: "04",
      label: "Memory",
      photo: { id: 4, alt: "Gurpreet Singh beside his award-winning painting of animals on a red ground" },
    },
  ],
};

export const manifesto = {
  line: "In an age of rapid change, painting and photography become acts of remembering.",
  body: "They preserve faces, places and fragments of everyday life before they disappear from view.",
};

export const practice = {
  heading: "The work",
  items: [
    { title: "Portraiture", desc: "Faces, character and stories captured through painting and photography." },
    { title: "Historical work", desc: "Visual interpretations of people, events and moments from the past." },
    { title: "Cultural stories", desc: "Traditions, celebrations and communities documented through image." },
    { title: "Landscape", desc: "Places shaped by memory, history and everyday life." },
    { title: "Photography", desc: "A documentary record of people, objects and moments." },
    { title: "Architecture", desc: "Buildings and spaces as witnesses to history." },
  ],
};

export const closing = {
  photo: {
    id: "12-paint",
    alt: "Oil painting of Maharaja Ranjit Singh seated beside a lion, in warm gold light",
  },
  caption: "Maharaja Ranjit Singh, oil on canvas",
};

export const contact = {
  heading: "Let’s keep the stories alive.",
  body: "For exhibitions, commissions, collaborations and conversations about the work.",
};
