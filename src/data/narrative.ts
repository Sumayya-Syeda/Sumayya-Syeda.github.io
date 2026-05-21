// Shared narrative types — used by projects, work, teaching, and community
// entries so any of them can render either a plain string or structured
// sections with headings, paragraphs, and bullet lists.

export interface NarrativeBullet {
  name?: string;
  text: string;
}

export interface NarrativeSection {
  heading?: string;
  paragraphs?: string[];
  bullets?: NarrativeBullet[];
}

export type Narrative = string | NarrativeSection[];
