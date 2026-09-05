/**
 * Contact page content. The source supplies no email address, phone number
 * or social URLs, so none appear here. Fields marked `null` are shown in the
 * UI as gaps to be filled, never as invented details.
 */

export const contactHero = {
  eyebrow: "Contact",
  title: "Start a conversation.",
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
  city: "Bathinda",
  region: "Punjab, India",
  note: "Studio visits by arrangement.",
};

export const institutional = {
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
  title: "Every conversation begins with a question.",
  label: "Get in touch",
};

/**
 * Integration point. Set VITE_CONTACT_ENDPOINT in .env to a URL that accepts a
 * JSON POST of the form fields (Formspree, a serverless function, etc.). With
 * no endpoint configured, the form validates fully and then reports that
 * delivery is not yet connected. It never pretends to have sent anything.
 */
export const contactEndpoint = import.meta.env.VITE_CONTACT_ENDPOINT || null;
