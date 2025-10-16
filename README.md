# Corgi

## Description

This is the repository for ScottyLabs' React component library. The live documentation and component library can be found at: <https://corgi.scottylabs.org>.

## Usage

1. Install `@scottylabs/corgi`
2. Add `@import "@scottylabs/corgi/css";` to your CSS file

[Example adding Corgi](https://github.com/ScottyLabs/cmumaps/commit/2f0f3c8d60d9ca04b8aca1c203ee646a5a01d71c) and [example using Corgi components](https://github.com/ScottyLabs/cmumaps/commit/91b78fdc41b0b7eb48767de9d2e9962f242d59a7).

## Development

Each component lives in its own directory under `lib/components`
(e.g. `lib/components/Button`). The directory name should match the component name.

- Each component must include an `index.tsx` file that exports the component as a **named export**.
- Each component should be re‑exported in `lib/main.ts`, which serves as the entrypoint for the library.

### Design

Corgi components are designed to match the ScottyLabs design system, as documented in our [Figma UI Kit](https://www.figma.com/design/TlYR1IqgGhRDXHyKJ1LHQs/ScottyLabs-UI-Kit).

### Functionality

Components should be built on top of [Base UI](https://base-ui.com/) primitives whenever possible.
For example, a `Toggle` component should wrap and extend the [Base UI Toggle](https://base-ui.com/react/components/toggle) instead of re-implementing its functionality.

### Styling

Each component should be styled in one of the following ways:

1. **CVA (Preferred)**
   Use [CVA](https://cva.style/docs) with [Tailwind](https://tailwindcss.com/).

2. **CSS Modules**
   If the component requires **complex CSS or animations**, include an `index.module.css` file in the same directory.

### Stories

[Storybook](https://storybook.js.org/docs) is used to develop and showcase components in isolation.

- Create corresponding stories for each component in `src/stories` (e.g. `src/stories/Button.stories.ts`).

- Run Storybook locally with: `bun run storybook`.

### Deployment

Draft a [new release](https://github.com/ScottyLabs/corgi/releases/new) and GitHub workflow will automatically publish it to NPM registry.
