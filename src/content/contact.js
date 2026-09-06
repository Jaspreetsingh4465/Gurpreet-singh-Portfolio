/**
 * Contact page content. The source supplies no email address, phone number
 * or social URLs, so none appear here. Fields marked `null` are shown in the
 * UI as gaps to be filled, never as invented details.
 */

export const contactHero = {
  eyebrow: "Contact",
  title: "Start a conversation.",
  /** The title split so the second half can carry the accent. */
  titleParts: { lead: "Start", accent: "a conversation" },
  note: ["Ideas", "Collaborations", "Exhibitions", "Conversations", "Always welcome."],
  photo: { id: "tools", alt: "Worn brushes in a jar beside pigment pots on the studio desk" },
  body:
    "For exhibitions, collaborations, workshops, cultural projects, art education, " +
    "commissioned work, research conversations or general enquiries, get in touch.",
};

export const enquiryTypes = [
  "Exhibitions",
  "Art collaborations",
  "Workshops",
  "Art education",
  "Cultural projects",
  "Photography",
  "Research",
  "Public art",
  "Media / interviews",
  "General enquiries",
];

export const contactMethods = ["Email", "Phone", "Either"];

export const directContact = {
  email: null,
  phone: null,
};

export const location = {
  heading: "Based in Punjab",
  city: "Bathinda",
  region: "Punjab, India",
  note: "Studio visits by arrangement.",
};

/** What enquiries are welcome, shown beside the form. Icon keys map in the page. */
export const openFor = [
  { icon: "exhibitions", label: "Exhibitions" },
  { icon: "workshops", label: "Workshops" },
  { icon: "commissions", label: "Commissions" },
  { icon: "research", label: "Research and conversations" },
];

/** A line about the way the work begins, set beside the form. */
export const contactAside = {
  socialHeading: "Let's keep in touch",
  socialBody: "Follow the work and updates.",
  quote: "Good conversations often lead to meaningful work.",
};

export const institutional = {
  eyebrow: "Exhibitions",
  cta: "View exhibitions",
  note: ["Art", "builds", "bridges"],
  photo: { id: 17, alt: "Gurpreet Singh in a shawl, listening to an elder in conversation" },
  aside: { id: "places", alt: "" },
  heading: "Exhibitions and institutional enquiries",
  body:
    "Galleries, museums, universities, cultural bodies and festival organisers can use " +
    "the form for exhibition proposals, workshop and seminar invitations, live painting " +
    "demonstrations, public art commissions and heritage documentation projects. " +
    "Include dates, venue and scope where known.",
};

/** Social profiles. Add real URLs; entries with `href: null` are not rendered. */
export const socials = [
  { network: "instagram", label: "Instagram", href: null },
  { network: "facebook", label: "Facebook", href: null },
  { network: "youtube", label: "YouTube", href: null },
];

export const closingCta = {
  /** Split so the last phrase carries the accent, as the hero title does. */
  title: { lead: "Every conversation begins with", accent: "a question" },
  /** The site uses one label for the contact intent, the same one as the header. */
  label: "Enquire",
  rail: ["Art", "People", "Places", "Ideas"],
  photo: { id: 1, alt: "" },
};

/**
 * Integration point. Set VITE_CONTACT_ENDPOINT in .env to a URL that accepts a
 * JSON POST of the form fields (Formspree, a serverless function, etc.). With
 * no endpoint configured, the form validates fully and then reports that
 * delivery is not yet connected. It never pretends to have sent anything.
 */
export const contactEndpoint = import.meta.env.VITE_CONTACT_ENDPOINT || null;
