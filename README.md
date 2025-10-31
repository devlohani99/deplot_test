# sandbox-app

This repository contains a Vite + React static frontend built with Tailwind CSS.

Automatic deployment
--------------------

A GitHub Actions workflow is included at `.github/workflows/deploy.yml` that:

- runs on push to the `main` branch
- installs dependencies, runs `npm run build` (Vite), and deploys the `dist/` folder to GitHub Pages using `peaceiris/actions-gh-pages`

Notes
-----

- The workflow publishes the built site to the `gh-pages` branch by default. GitHub Pages will serve that branch's content.
- No backend or server endpoints are required — this is a static site.
- If you prefer to deploy to a different provider (Netlify, Vercel), you can disable this workflow and use their platform-specific settings.

If you want to change Node.js version or the publish branch/directory, edit `.github/workflows/deploy.yml`.
