# Use Class Variance Authority

## Context and Problem Statement

Many components, like `Button`, will have several states, variants, sizes, and more. Aside from state, all of these should be encapsulated in component props. Without a proper way to model this configuration, relationships between them (e.g., some styles only existing for certain variants), and their corresponding CSS class names, components will become very disorganized and difficult to maintain.

## Considered Options

* Use a helper library like [Class Variance Authority](https://beta.cva.style/) (cva) to manage CSS modules
* Manually bake in the logic in each component

## Decision Outcome

We chose CVA for the following reasons:

* The types are well-thought-out and prevent against misusage
* It has robust support for various styling strategies, including both Tailwind CSS classnames (with extended support using `tw-merge` and `clsx`) and BEM. Thus, using CVA will make migration easier if we ever decide to move away from CSS modules.
* It also has support for patterns like composition makes it easier to handle variants between components that share similar configuration patterns. In our design system, multiple components will share states, variants, etc.

### Consequences

* We will have to manually upgrade from the beta once version 1.0.0 is mature
