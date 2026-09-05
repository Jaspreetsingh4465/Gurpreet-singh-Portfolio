/**
 * The professional record: awards, exhibitions, workshops, public art,
 * leadership and collections. Every entry is from the supplied bio-data.
 * `year: null` means the source lists the item without a year.
 */

export const awards = [
  { year: "1995", title: "Award for Work on Sikh History", by: "World Sikh Conference, Amritsar" },
  { year: "1996", title: "Best Painting Award", by: "S. Sobha Singh Memorial Artist Society, Bathinda" },
  { year: "1997", title: "Best Painting Award", by: "S. Sobha Singh Memorial Artist Society, Bathinda" },
  { year: "1997", title: "Best Painting Award", by: "Bank of Punjab Annual Art Exhibition, Lalit Kala Academy, Chandigarh" },
  { year: "1998", title: "Best Painting Award", by: "Kalpana Fine Arts Society, Ludhiana" },
  { year: "1999", title: "Honour", by: "Norah Richards Memorial Art & Theatre Society, Bathinda" },
  { year: "2002", title: "Honour", by: "S. Sobha Singh Memorial Artist Society, Bathinda" },
  { year: "2003", title: "Honour", by: "Brotherhood Club, Bathinda" },
  { year: "2004", title: "Honour", by: "Bathinda Region Heritage Society, Bathinda" },
  { year: "2004", title: "Honour for Contribution to Art & Culture", by: "Conferred by the Hon’ble Chief Minister of Punjab" },
  { year: "2007", title: "Best Painting Award, Regional Level", by: "Punjab Lalit Kala Academy, Chandigarh" },
  { year: "2007", title: "Vision Award", by: "International Photography Contest, Asia Vision" },
  { year: "2010", title: "Fourth Prize, National Photography Contest", by: "NDTV India" },
  { year: null, title: "Sanman", by: "Bhagat Singh Sabhyacharak Club, Bathinda" },
  { year: "2012 & 2013", title: "Honour", by: "Department of Architecture, Giani Zail Singh University Campus, Bathinda" },
  { year: "2015", title: "Best Artist Award in Painting", by: "Lalit Kala Akademi Punjab, Chandigarh" },
  { year: "2017", title: "Annual Award", by: "Baba Farid Mela, Faridkot" },
  { year: "2022", title: "State-Level Honour", by: "Programme commemorating the birth anniversary of Shaheed Bhagat Singh, presented by the Chief Minister of Punjab" },
];

/** Solo exhibitions grouped by country, in the order the source gives them. */
export const soloExhibitions = [
  {
    country: "India",
    year: null,
    venues: [
      { year: "2008", venue: "Punjabi University, Patiala" },
      { year: "2009", venue: "D.A.V. College, Abohar" },
      { year: "2017", venue: "Faridkot, Punjab" },
      { year: "2018", venue: "Faridkot, Punjab" },
    ],
  },
  {
    country: "Canada",
    year: "2018",
    venues: [
      { venue: "London, Ontario" },
      { venue: "Toronto, Ontario" },
      { venue: "Surrey, British Columbia" },
    ],
  },
  {
    country: "Australia",
    year: "2019",
    venues: [{ venue: "World Sikh Games, Melbourne" }, { venue: "American College, Brisbane" }],
  },
  {
    country: "United States",
    year: "2024",
    venues: [{ venue: "Phoenix Art Museum, Phoenix, Arizona" }],
  },
];

export const groupExhibitions = {
  intro: "Participation in state, national and international exhibitions has included:",
  venues: [
    "Punjab Lalit Kala Akademi, Chandigarh",
    "AIFACS, New Delhi",
    "North Zone Cultural Centre, Patiala",
    "Government College of Art, Chandigarh",
    "Kalpana Fine Arts Society, Ludhiana",
    "Bank of Punjab Annual Art Exhibitions, Chandigarh",
    "Punjabi University Museum & Art Gallery, Patiala",
    "S. Sobha Singh Memorial Chittarkar Society, Bathinda",
    "Gadri Mela, Desh Bhagat Yadgari Hall, Jalandhar",
    "Phoenix Art Museum, Arizona, USA",
  ],
  note:
    "The exhibition record also includes numerous annual art exhibitions, photography " +
    "exhibitions and cultural art events across Punjab and Chandigarh.",
};

export const workshops = [
  { year: "2006", title: "Workshop & Seminar on Janam Sakhies", where: "Punjabi University, Patiala" },
  { year: "2012", title: "Solo Slide Show Programme", where: "Youth Welfare Department, Punjabi University, Patiala" },
  { year: null, title: "Art workshops", where: "Across Punjab and Chandigarh" },
  { year: null, title: "Symposiums", where: "Punjabi University, Patiala" },
  { year: null, title: "Live painting demonstration", where: "Heritage Festival, New Delhi" },
  { year: null, title: "Seminar commemorating the birth anniversary of Maharaja Ranjit Singh", where: "MRSPTU, Bathinda" },
];

export const publicArt = [
  { year: null, title: "101-metre public awareness painting on drug abuse", note: "Created with students" },
  { year: null, title: "20 × 12 ft acrylic painting on World Peace", note: "Completed within four hours during a live demonstration" },
  { year: null, title: "20 × 8 ft oil painting", note: "Created during Virasat Mela, Bathinda" },
  { year: "2019", title: "Large-scale live painting", note: "Heritage Festival, New Delhi" },
];

export const leadership = {
  roles: [
    { role: "President", org: "S. Sobha Singh Memorial Chittarkar Society, Bathinda" },
    { role: "Former General Secretary", org: "S. Sobha Singh Memorial Chittarkar Society, Bathinda" },
    { role: "President", org: "Venus Art Theatre Society, Bathinda" },
  ],
  note:
    "This organisational work has included exhibitions, workshops, seminars, art camps, " +
    "artist interactions, cultural festivals, theatre activities and community programmes.",
};

export const collections = {
  public: [
    "Government of Punjab, PWD & B&R",
    "Punjab Tourism Department",
    "Indian Army, Bathinda Cantonment",
    "Punjabi University Museum, Patiala",
    "Indian Oil Corporation",
    "Virasat Bhawan",
  ],
  international: ["Dan Rooney Collection, USA", "Phoenix Museum, Arizona, USA", "Sikh Temple, Hong Kong"],
  privateNote:
    "Original artworks are held by collectors in India, Canada, Australia, the United " +
    "States, Hong Kong and other countries. Earlier records also list the Dr. Khanuja " +
    "Art Collection, USA.",
};
