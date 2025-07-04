# Use Base UI Component Library

## Context and Problem Statement

In implementing the ScottyLabs Design Kit as a React component library, we want a sensible base set of components to apply styles to. These should lessen the development overhead of handling common stateful functionality (like managing the On/Off or Opened/Closed states for checkboxes and dropdowns, respectively) while maintaining best practices and adhering to a11y (accessibility) guidelines.

## Considered Options

* [shadcn/ui](https://ui.shadcn.com/)
* [Base UI](https://base-ui.com/)
* [Radix UI](https://www.radix-ui.com/)
* [AriaKit](https://ariakit.org/)
* [Material UI](https://mui.com/material-ui/)
* [Chakra UI](https://www.chakra-ui.com/)
* [Mantine](https://mantine.dev/)

## Decision Outcome

We chose "Base UI" for the following reasons:

* shadcn/ui has shown a slowed development cycle, and the lead developer has placed more emphasis on AI features and a relationship with Vercel, which we do not want. The lack of an NPM package also creates a hassle: shadcn/ui is laden with bugs, and there is no good way to adopt upstream fixes without any form of versioning. We also do not want to format and lint external code.
* Radix UI has also shown a slowed development cycle, and many of the developers have migrated to Base UI.
* AriaKit has poor documentation in comparison to Base UI and is less popular.
* Material UI enforces Google's Material Design system, which is not what we are looking for.
* Chakra UI and Mantine also enforce their own design systems, and are not unstyled component systems.
* Base UI is being actively developed by the creators of Radix, Floating UI, and Material UI. It has strong documentation that is similar in style to the most popular option, shadcn/ui, and also aims to have a similar API.

### Consequences

* Components from this library shall be distributed in an NPM package, similarly to how Base UI distributes its components, rather than as copy-paste chunks of code like shadcn/ui does.
