import { existsSync } from "node:fs";
import { join } from "node:path";
import { about, contact, education, experience, projects, site, skills } from "@/data/content";

// The page is rendered at build time, so the button appears once the PDF is added to public/.
const hasResume = existsSync(join(process.cwd(), "public", contact.resumeHref));

const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const linkClass = "text-amber underline-offset-4 hover:underline";

function Section({
  id,
  title,
  children,
}: Readonly<{ id: string; title: string; children: React.ReactNode }>) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-line border-t py-16">
      <h2 id={`${id}-title`} className="mb-8 text-2xl font-semibold tracking-tight">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="focus:bg-panel sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:px-4 focus:py-2"
      >
        Skip to content
      </a>

      <header className="mx-auto max-w-3xl px-6 pt-6">
        <nav aria-label="Primary">
          <ul className="text-muted flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-amber">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="main" className="mx-auto max-w-3xl px-6">
        <div className="py-24 sm:py-32">
          <p className="rise text-amber font-medium">{site.alias}</p>
          <h1 className="rise rise-1 mt-3 text-5xl font-bold tracking-tight sm:text-6xl">
            {site.name}
          </h1>
          <p className="rise rise-2 text-muted mt-6 max-w-xl text-xl">{site.tagline}</p>
          <p className="rise rise-2 text-muted mt-4 text-sm">{site.location}</p>
        </div>

        <Section id="about" title="About">
          <div className="text-muted space-y-4 text-lg leading-relaxed">
            {about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {education.map((item) => (
              <li key={item.degree} className="border-line bg-panel rounded-lg border p-4">
                <p className="font-medium">{item.degree}</p>
                <p className="text-muted text-sm">{item.school}</p>
                <p className="text-muted mt-1 text-sm">{item.detail}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="experience" title="Experience">
          <div className="space-y-10">
            {experience.map((job) => (
              <article key={job.company}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-lg font-medium">
                    {job.role} · <span className="text-amber">{job.company}</span>
                  </h3>
                  <p className="text-muted text-sm">
                    {job.period} · {job.location}
                  </p>
                </div>
                <ul className="text-muted mt-3 list-disc space-y-1 pl-5">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                {job.metrics.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {job.metrics.map((metric) => (
                      <li
                        key={metric}
                        className="border-line text-text rounded-full border px-3 py-1 text-sm"
                      >
                        {metric}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="space-y-6">
            {projects.map((project) => (
              <article key={project.name} className="border-line bg-panel rounded-lg border p-6">
                <h3 className="text-lg font-medium">{project.name}</h3>
                <p className="text-muted mt-1">{project.summary}</p>
                <dl className="mt-4 space-y-3 text-sm leading-relaxed">
                  <div>
                    <dt className="text-amber font-medium">Problem</dt>
                    <dd className="text-muted">{project.problem}</dd>
                  </div>
                  <div>
                    <dt className="text-amber font-medium">Approach</dt>
                    <dd className="text-muted">{project.approach}</dd>
                  </div>
                  <div>
                    <dt className="text-amber font-medium">Result</dt>
                    <dd className="text-muted">{project.result}</dd>
                  </div>
                </dl>
                <p className="text-muted mt-4 text-sm">{project.stack.join(" · ")}</p>
                {project.href && (
                  <a href={project.href} className={`mt-3 inline-block text-sm ${linkClass}`}>
                    View {project.name} on GitHub
                  </a>
                )}
              </article>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <dl className="grid gap-6 sm:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill.group}>
                <dt className="font-medium">{skill.group}</dt>
                <dd className="text-muted mt-1">{skill.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="contact" title="Contact">
          <p className="text-muted text-lg">{contact.intro}</p>
          <ul className="mt-6 space-y-2">
            {contact.links.map((link) => (
              <li key={link.label}>
                <span className="text-muted mr-2">{link.label}:</span>
                <a href={link.href} className={linkClass}>
                  {link.value}
                </a>
              </li>
            ))}
          </ul>
          {hasResume && (
            <a
              href={contact.resumeHref}
              className="bg-amber text-ink mt-8 inline-block rounded-md px-5 py-2.5 font-medium hover:opacity-90"
            >
              Download resume
            </a>
          )}
        </Section>
      </main>

      <footer className="border-line text-muted mx-auto max-w-3xl border-t px-6 py-8 text-sm">
        © {new Date().getFullYear()} {site.name}
      </footer>
    </>
  );
}
