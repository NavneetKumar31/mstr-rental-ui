# mstr-rental-ui

A modern rental onboarding UI built with React, TypeScript, Vite, and Material UI.

## Overview

`mstr-rental-ui` is a polished front-end experience for rental workflows, featuring:

- A centered landing page inspired by Airbnb and NoBroker
- Light/dark mode using Material UI defaults
- Responsive sign in / sign up pages
- A minimal, accessible UI with clean onboarding flows

## Project structure

- `src/mstr-App.tsx` — main app entry with theme provider and routing state
- `src/theme/mstr-theme.ts` — Material UI theme setup
- `src/components` — reusable layout and navigation components
- `src/pages` — landing, sign in, and sign up screen components

## Getting started

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run lint checks:

```bash
npm run lint
```

Fix lint issues automatically:

```bash
npm run lint:fix
```

## Code style and workspace settings

This repository includes workspace-level settings for consistent formatting and linting:

- `./.editorconfig` defines indentation, line endings, and final newline handling
- `./.vscode/settings.json` enables `eslint` auto fixes and formatting on save
- `eslint.config.js` is configured for TypeScript, React hooks, and Vite

### Best practices

- Use 2-space indentation
- Keep line length under 120 characters
- Trim trailing whitespace
- Preserve a final newline in every file
- Use `npm run lint` before commits

## Recommended VS Code extensions

- `dbaeumer.vscode-eslint`
- `eamodio.gitlens`
- `esbenp.prettier-vscode`

## Branch and contribution

This project is currently developed on the `development` branch.

For feature work, create a feature branch off `development`, then open a pull request when ready.
