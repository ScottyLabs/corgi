# Component Library

## Development

Each component lives in its own directory in `lib/components` (e.g. `lib/components/Button`). This directory should be named after the component, and have an `index.tsx` exporting the component as a named export. Styles belong in a `styles.module.css` file in the same directory. Corresponding stories are created in `src/stories` (e.g. `src/stories/Button.stories.ts`).

Use `bun run storybook` to view components.
