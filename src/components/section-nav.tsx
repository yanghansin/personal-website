"use client";

import { useEffect, useState } from "react";

type NavItem = { href: string; label: string };

// Highlights the link for the section currently being read. The page works without JS;
// this only adds the highlight.
export function SectionNav({ items }: Readonly<{ items: NavItem[] }>) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((section) => section !== null);

    function update() {
      // A section is current once its top passes 30% of the way down the viewport.
      const line = window.innerHeight * 0.3;
      let current: string | null = null;
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= line) current = section.id;
      }
      // The last section may be too short to reach the line, so pick it at the page bottom.
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom && sections.length > 0) current = sections[sections.length - 1].id;
      setActiveId(current);
    }

    const frame = requestAnimationFrame(update);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [items]);

  return (
    <nav aria-label="Primary">
      <ul className="text-muted flex flex-wrap gap-x-5 gap-y-2 text-sm">
        {items.map((item) => {
          const active = item.href === `#${activeId}`;
          return (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={active ? "location" : undefined}
                className={active ? "text-amber" : "hover:text-amber"}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
