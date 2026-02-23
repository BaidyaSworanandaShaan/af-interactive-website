# AF Interactive — Website

A modern marketing website built with React, TypeScript, Vite, and Tailwind CSS. This repository contains the frontend for AF Interactive's public site and a set of reusable UI components and sections used to compose the pages.

## Features

- Fast dev feedback with Vite
- TypeScript for safer code
- Utility-first styling with Tailwind CSS
- Small, composable React components (sections + UI primitives)
- Theme context and simple hooks for app-level behavior

## Quick Start

Prerequisites: Node.js (16+ recommended) and npm or yarn.

1. Install dependencies

```bash
npm install
# or
yarn
```

2. Run the development server

```bash
npm run dev
# or
yarn dev
```

3. Build for production

```bash
npm run build
# or
yarn build
```

4. Preview the production build locally

```bash
npm run preview
# or
yarn preview
```

## Project Structure

- `index.html` — App entry HTML
- `src/` — Main source folder
  - `main.tsx` — Bootstraps the app
  - `App.tsx` — Root component
  - `index.css` — Tailwind + base styles
  - `components/` — Reusable UI components and page sections
    - `sections/` — Hero, Navbar, Footer, Services, etc.
    - `ui/` — Buttons, Container, Reveal, and other primitives
  - `context/` — `ThemeContext` for theme state
  - `hooks/` — Custom hooks (e.g., `useTheme`)
- `public/` — Static assets

## Development Notes

- This project uses Vite's opinionated development server for fast HMR.
- Tailwind configuration lives in `tailwind.config.js`.
- Keep components small and presentational; move shared behavior into hooks or context.

## Contributing

1. Fork the repo and create a feature branch.
2. Open a pull request with a clear description of changes.
3. Keep commits focused and add small, testable changes.

If you'd like a contribution guide or commit conventions added, open an issue or PR.

## Scripts

- `dev`: Start the Vite dev server
- `build`: Produce a production build
- `preview`: Serve the production build locally

See `package.json` for the full script list.


