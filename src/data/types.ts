// Shapes for the copy in content.ts. A missing or misspelled field fails the build
// instead of rendering a blank spot on the page.

export type Site = {
  name: string;
  alias: string;
  tagline: string;
  location: string;
  description: string;
};

export type Education = {
  degree: string;
  school: string;
  detail: string;
};

export type Job = {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
  metrics: string[];
};

export type Project = {
  name: string;
  summary: string;
  problem: string;
  approach: string;
  result: string;
  stack: string[];
  /** Public repository URL, or null to hide the link. */
  href: string | null;
};

export type SkillGroup = {
  group: string;
  items: string[];
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
};

export type Contact = {
  intro: string;
  links: ContactLink[];
  /** Path under public/, e.g. "/resume.pdf". */
  resumeHref: string;
};
