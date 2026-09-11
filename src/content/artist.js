/**
 * Everything about the artist as a person and a practice, taken from the
 * supplied bio-data and "About Gurpreet Artist" text. Nothing here is
 * invented. Where the source is silent, the field is `null` or the array is
 * empty, and the UI is expected to show a marked gap rather than a guess.
 *
 * Date of birth, marital status and nationality are in the source but are
 * deliberately not published on a public website.
 */

export const profile = {
  name: "Gurpreet Singh",
  professionalName: "Gurpreet Artist Bathinda",
  roles: ["Visual Artist", "Painter", "Art Educator", "Researcher"],
  base: "Bathinda, Punjab, India",
  languages: ["Punjabi", "Hindi", "English", "Urdu"],
  summaryLine:
    "A visual artist, painter, art educator and researcher from Bathinda, Punjab, with " +
    "more than three decades of artistic engagement and over twenty-five years of " +
    "experience in Fine Arts education.",
  exhibitedIn: ["India", "Canada", "Australia", "United States"],
};

/** Editorial chapters for the About page, each a paraphrase of the source. */
export const chapters = {
  artist: {
    heading: "The artist",
    paragraphs: [
      "Gurpreet Singh, widely known as Gurpreet Artist Bathinda, is a painter and art " +
        "educator based in Bathinda, Punjab. His practice has developed over several " +
        "decades and is closely associated with painting, art education, cultural " +
        "activity and an enduring interest in the history and visual traditions of Punjab.",
      "He works primarily in oil, with watercolour and acrylic also part of the practice, " +
        "across portraiture, landscape and historical painting. The subjects vary; the " +
        "common thread is the importance given to observation.",
      "Portraiture occupies an important position. The interest in the human face is not " +
        "limited to likeness: expression, character and the suggestion of a lived life " +
        "matter equally. In landscape the same sensitivity appears in the treatment of " +
        "atmosphere, light and the particular character of a place.",
    ],
  },
  observation: {
    heading: "The idea of observation",
    statement:
      "Faces, gestures, places and historical situations are treated as subjects " +
      "carrying their own histories, rather than simply as material for pictorial " +
      "composition.",
    body:
      "The portrait begins with an individual; the landscape with a particular place; the " +
      "historical painting with an event from the past. Each becomes a way of " +
      "considering memory, identity and the relationship between people and their " +
      "surroundings.",
  },
  punjab: {
    heading: "Punjab, memory and history",
    paragraphs: [
      "A considerable part of the artist’s vocabulary has emerged from his relationship " +
        "with Punjab and its cultural memory. Sikh history, Punjabi traditions, historical " +
        "personalities, architecture and the changing landscape of the region have " +
        "provided recurring subjects.",
      "His historical paintings, including works connected with the period of Maharaja " +
        "Ranjit Singh, reflect an interest in bringing historical narratives into a visual " +
        "and human context rather than treating history as spectacle.",
      "This engagement with the past is particularly evident in his interest in Bathinda, " +
        "the city with which his artistic life has been closely associated. History, " +
        "monuments, local traditions, people and the surrounding landscape have been " +
        "subjects of observation and documentation. Painting, photography and writing " +
        "have, in different ways, become means of recording a region whose cultural " +
        "character continues to change.",
    ],
    label: "A continuing narrative",
    words: ["People", "Places", "Stories"],
    rail: ["Art", "History", "Punjab", "Memory"],
    note: ["Stories", "live longer", "in colour."],
    /**
     * Frames from the Punjab strand. Only the first is a catalogued work with a
     * medium; the rest are captioned as what they are, a painting or a
     * photograph, because no artwork titles, years or dimensions have been
     * supplied. Do not add invented ones here.
     */
    frames: [
      {
        id: 12,
        title: "Maharaja Ranjit Singh",
        note: "Oil on canvas. Historical narrative brought into a human context.",
        alt: "Gurpreet Singh holding a palette beside his oil painting of Maharaja Ranjit Singh with a lion",
      },
      {
        id: "4-canvas",
        title: "Award-winning canvas",
        note: "Animal heads against red, painted on weathered boards.",
        alt: "Painting of animal heads mounted on weathered boards against a red ground",
      },
      {
        id: 16,
        title: "Portrait at the easel",
        note: "A young maharaja, painted in the studio.",
        alt: "Gurpreet Singh at the easel, painting a portrait of a young maharaja",
      },
      {
        id: "places",
        title: "Heritage architecture",
        note: "A weathered courtyard, photographed.",
        alt: "A weathered haveli courtyard seen through an open studded wooden door",
      },
      {
        id: "5-stage",
        title: "Folk performance",
        note: "Punjabi tradition, documented on stage.",
        alt: "Folk performers mid-dance on a lit stage, one lifted on another's shoulders",
      },
    ],
  },
  educator: {
    heading: "The educator",
    paragraphs: [
      "Art education has been an equally important part of his professional life. " +
        "Twenty-five years at St. Joseph’s Convent Senior Secondary School, Bathinda, " +
        "brought him into sustained contact with generations of students, teaching " +
        "Drawing and Painting and guiding them in competitions, exhibitions, workshops " +
        "and creative programmes.",
      "Later work as an artist, art educator, visiting professor and Kala Guru extended " +
        "this involvement into higher education and professional art circles.",
      "The emphasis in his teaching has consistently extended beyond technique. Drawing, " +
        "colour and composition remain fundamental, accompanied by observation, " +
        "experimentation, independent thought and an awareness of the cultural " +
        "environment in which an artist works.",
    ],
  },
  beyond: {
    heading: "Beyond painting",
    intro:
      "His interests move naturally into photography, theatre, literature and cultural " +
      "research. Photography in particular has provided another way of looking closely " +
      "at the natural environment; his work on the native birds and landscapes of " +
      "Punjab carries the same impulse towards observation and documentation.",
    // Presented as dimensions of a wider cultural life, not as services.
    interests: [
      { title: "Photography", note: "Native birds and landscapes of Punjab" },
      { title: "Theatre", note: "Participant; President, Venus Art Theatre Society" },
      { title: "Literature", note: "Articles on a variety of subjects" },
      { title: "Poetry", note: "Writes poetry" },
      { title: "Folk dance", note: "Participant in folk-dance activities" },
      { title: "Cultural heritage", note: "Heritage documentation and research" },
      { title: "Adventure sports", note: "Has organised adventure-sports events" },
    ],
  },
};

export const pullQuote = {
  text:
    "Art can preserve what time alters, give form to what memory retains, and create a " +
    "dialogue between the past and the present.",
  attribution: "Gurpreet Singh",
};

/** Visual categories of the practice, for About and Work. */
export const practiceCategories = [
  {
    slug: "portraiture",
    title: "Portraiture",
    desc: "Expression, character and the suggestion of a lived life, beyond likeness.",
    photo: { id: 16, alt: "Gurpreet Singh painting a portrait of a young maharaja at the easel" },
  },
  {
    slug: "landscape",
    title: "Landscape",
    desc: "Atmosphere, light and the particular character of a place.",
    photo: { id: 14, alt: "A figure walking a forest trail" },
  },
  {
    slug: "historical",
    title: "Historical painting",
    desc: "Narratives brought into a visual and human context, including the period of Maharaja Ranjit Singh.",
    photo: { id: "4-canvas", alt: "Painting of animal heads mounted on weathered boards against red" },
  },
  {
    slug: "cultural",
    title: "Cultural painting",
    desc: "Sikh history, Punjabi traditions, architecture and a changing landscape.",
    photo: { id: "5-stage", alt: "Folk performers lifted mid-dance on a stage" },
  },
  {
    slug: "drawing",
    title: "Drawing",
    desc: "The foundation of the practice and of the teaching.",
    photo: { id: "15-studio", alt: "Gurpreet Singh drawing at his drafting table" },
  },
  {
    slug: "photography",
    title: "Photography",
    desc: "Another way of looking closely at the natural environment.",
    photo: { id: 1, alt: "Gurpreet Singh reading among stacked books by a window" },
  },
];

export const education = [
  { degree: "M.A. in Drawing & Painting", institution: "Jiwaji University, Gwalior" },
  { degree: "M.A. in History of Fine Arts", institution: "Guru Nanak Dev University, Amritsar" },
  // This is a qualification, so it has no university line to fill in.
  { degree: "UGC-NET qualified in Fine Arts" },
  { degree: "Chitra Visharad", institution: "Pracheen Kala Kendra, Chandigarh" },
  { degree: "B.A.", institution: "Guru Nanak Dev University, Amritsar" },
];

export const experience = [
  {
    from: "November 2025",
    to: "Present",
    role: "Kala Guru",
    institution: "Guru Kashi University, Talwandi Sabo",
    body:
      "Teaching and mentoring students of Visual Arts, with responsibilities including " +
      "studio practice, Art History, Visual Studies, exhibitions and workshops.",
  },
  {
    from: "1998",
    to: "2023",
    role: "Art Teacher",
    institution: "St. Joseph’s Convent Senior Secondary School, Bathinda",
    body:
      "Served for 25 years, teaching Drawing and Painting and guiding students in art " +
      "competitions, exhibitions, workshops and creative programmes.",
  },
];

export const specialisations = [
  "Oil Painting", "Hyperrealism", "Neo-Surrealism", "Portrait Painting",
  "Historical & Cultural Painting", "Contemporary Indian Art", "Landscape Painting",
  "Drawing", "Art History", "Visual Culture", "Art Appreciation", "Creative Composition",
  "Exhibition Design & Curation", "Museum Studies", "Heritage Documentation", "Photography",
];

export const researchInterests = [
  "Indian Art History", "Sikh Art & Iconography", "Punjab Heritage & Folk Culture",
  "Hyperrealism in Contemporary Painting", "Neo-Surrealism", "Portraiture & Human Expression",
  "Museum Studies", "Heritage Conservation", "Public Art", "Visual Culture",
  "Art Education", "Interdisciplinary Approaches in Fine Arts",
];

export const summary = [
  "30+ years of artistic engagement",
  "25+ years of Fine Arts teaching experience",
  "M.A. in Drawing & Painting",
  "M.A. in History of Fine Arts",
  "UGC-NET qualified in Fine Arts",
  "Kala Guru, Guru Kashi University",
  "International exhibitions in Canada, Australia and the United States",
  "State, national and international awards in Painting and Photography",
  "Works in public and private collections in India and abroad",
  "President, S. Sobha Singh Memorial Chittarkar Society",
  "President, Venus Art Theatre Society",
];
