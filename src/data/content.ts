// All site copy lives here. Edit this file to change text; no component changes needed.

export const site = {
  name: "Han Yang",
  alias: "Flying Fox",
  tagline: "Recent M.S. CS grad building AI agents and distributed systems.",
  location: "Redmond / Seattle, Washington · Open to relocation",
  description:
    "Han Yang (Flying Fox) is a recent M.S. CS graduate building AI agents and distributed systems.",
};

export const about = [
  "I'm Han Yang, also known as Flying Fox. I studied mathematics and statistics at Purdue, then finished an M.S. in Computer Science at Northeastern University in Seattle in May 2026.",
  "My internships put that training to work on concrete problems: using LLMs to parse immigration forms at QuickImmi, and working out where EV charging stations should go at Puget Sound Energy.",
  "My projects sit in the same two areas: a chess agent whose moves are verified before they are played, and a ski-lift event pipeline I pushed with more than 200,000 load-test requests. I speak English, Mandarin, and Japanese.",
];

export const education = [
  {
    degree: "M.S. Computer Science",
    school: "Northeastern University (Seattle)",
    detail: "GPA 4.0 · Graduated May 2026",
  },
  {
    degree: "B.A. Mathematics/Statistics",
    school: "Purdue University",
    detail: "GPA 3.86 · 2019–2023",
  },
];

export const experience = [
  {
    role: "Software Engineer Intern",
    company: "QuickImmi Inc",
    location: "Seattle",
    period: "Sep–Nov 2024",
    points: [
      "Built LLM-based parsing for immigration form completion.",
      "Worked with AWS Cognito, S3, and RDS, plus Stripe and DocuSign.",
    ],
    metrics: ["~400 application cases", "4 lawyer accounts", "~150 user accounts"],
  },
  {
    role: "Software Engineer Intern",
    company: "Puget Sound Energy",
    location: "Seattle",
    period: "Jun–Aug 2024",
    points: [
      "Optimized EV charging station placement with Python, Pandas, and NetworkX.",
      "Built React data visualizations.",
    ],
    metrics: [],
  },
];

export const projects = [
  {
    name: "ChessGPT",
    summary: "A chess agent that runs on local LLMs through Ollama.",
    problem:
      "An LLM can confidently suggest an illegal move, so its raw output can't be trusted to play a game.",
    approach:
      "A ReAct-style loop uses python-chess as a legality-check tool. Guardrails add output schemas, pre-execution verification, and a deterministic fallback.",
    result:
      "An eval harness tracks win rate, illegal-move rate, tokens per move, and latency. Measured results will appear here after a full evaluation run.",
    stack: ["Python", "python-chess", "Ollama"],
    href: "https://github.com/yanghansin/chessgpt",
  },
  {
    name: "Distributed Ski Data System",
    summary: "A Java REST API on AWS EC2 for high-volume skier lift-ride events.",
    problem: "Lift-ride events arrive in high volume and have to be accepted quickly.",
    approach:
      "A multithreaded client drives 200,000+ requests against the API. Tomcat concurrency tuning and HTTP connection reuse raise capacity, and RabbitMQ decouples ingestion from processing.",
    result:
      "Reported from the original project: throughput of ~2,000 → ~4,000 req/sec. These figures have not been re-measured.",
    stack: ["Java", "Tomcat", "RabbitMQ", "AWS EC2"],
    href: "https://github.com/yanghansin/ski-data-system",
  },
  {
    name: "Seattle House-Price Prediction",
    summary: "A secondary project predicting Seattle house prices.",
    problem: "Estimate house prices in the Seattle market.",
    approach: "A model built with scikit-learn.",
    result: "R² of 0.94.",
    stack: ["Python", "scikit-learn"],
    href: null,
  },
];

export const skills = [
  { group: "Languages", items: ["Java", "Python", "JavaScript", "TypeScript", "SQL"] },
  { group: "Web & backend", items: ["React", "Tomcat", "RabbitMQ"] },
  { group: "Cloud", items: ["AWS EC2", "AWS S3", "AWS RDS", "AWS Cognito"] },
  { group: "Data & AI", items: ["Pandas", "NetworkX", "scikit-learn", "Ollama / local LLMs"] },
  { group: "Tools", items: ["Git"] },
];

export const contact = {
  intro: "I'm looking for my next role and open to relocation. The best way to reach me is email.",
  links: [
    {
      label: "Email",
      value: "yang.han4@northeastern.edu",
      href: "mailto:yang.han4@northeastern.edu",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/han-yang-943196250",
      href: "https://linkedin.com/in/han-yang-943196250",
    },
    { label: "GitHub", value: "github.com/yanghansin", href: "https://github.com/yanghansin" },
  ],
  // TODO: add the PDF at public/resume.pdf. This link returns 404 until then.
  resumeHref: "/resume.pdf",
};
