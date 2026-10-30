# personal-website

The portfolio site for Han Yang ("Flying Fox"): a single dark-themed page covering background, experience, projects, skills, and contact details.

## Tech stack

Next.js (App Router), TypeScript, and Tailwind CSS, with ESLint and Prettier. Motion is CSS only, and it turns off for visitors who prefer reduced motion.

## How to run

```bash
git clone https://github.com/yanghansin/personal-website.git
cd personal-website
npm ci
npm run dev
```

Then open <http://localhost:3000>.

Other commands:

```bash
npm run build         # production build
npm run lint          # ESLint
npm run format        # format with Prettier
npm run format:check  # check formatting
```

## Editing the content

All copy lives in [`src/data/content.ts`](src/data/content.ts). You can change the text there without touching any components.

## Project status

The site is built and ready to deploy, but it isn't deployed yet.

TODO:

- Add the resume at `public/resume.pdf`. The **Download resume** button returns a 404 until then.
- Deploy to Vercel. The default Next.js settings work with no extra configuration.

## Roadmap

- Replace the ChessGPT result text with measured numbers from a full evaluation run.
- Add a link to the house-price project once it has a public repository.

## License

[MIT](LICENSE)
