# Repository Guidelines

## Project Structure & Module Organization
- `src/` contains the React Static app entry points (`src/index.js`, `src/App.js`) and feature folders like `components/`, `pages/`, `hooks/`, `state/`, `utils/`, and `styles/`.
- `public/` holds static files copied as-is to the build output.
- `dist/` is the generated production site (created by build/export).
- `static.config.js` configures React Static routes and site behavior.
- `tailwind.config.js` and `postcss.config.js` define styling pipelines.

## Build, Test, and Development Commands
- `npm run start`: starts the React Static dev server with live reload.
- `npm run build`: builds the production site into `dist/`.
- `npm run stage`: builds a staging version (React Static `--staging`).
- `npm run bundle`: creates a deployable JS bundle.
- `npm run export`: exports the static site for hosting.
- `npm run serve`: serves `dist/` locally at `http://localhost:3000`.

## Coding Style & Naming Conventions
- JavaScript uses 2-space indentation and no semicolons (see `src/App.js`).
- Use default exports for React components in `src/pages/` and `src/components/`.
- Filenames are `camelCase` for hooks (`useKerningLive.js`) and `PascalCase` for components when applicable.
- Tailwind utilities live in `src/styles/tailwind.css`; add custom CSS there.

## Testing Guidelines
- No automated test framework is configured in this repository.
- If introducing tests, document the tool and add a script in `package.json`.

## Commit & Pull Request Guidelines
- Git history does not show a strict convention; keep commits short and descriptive (e.g., "Fix typo in welcome message").
- PRs should include a brief summary, affected pages/routes, and screenshots for visual changes.

## Security & Configuration Tips
- Node.js version requirement: `>=18` (see `package.json`).
- Avoid editing `dist/` directly; regenerate it via `npm run build` or `npm run export`.
