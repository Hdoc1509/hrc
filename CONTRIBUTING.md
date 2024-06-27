# @hrc/monorepo Contributing Guide

## Repo Setup

To develop locally, fork the `@hrc/monorepo` repository and clone it in your local
machine:

```bash
# I recommend set `react-components` as the target directory.
git clone https://github.com/[your-username]/hrc.git --depth=1 react-components
```

The repo is a monorepo using [`pnpm workspaces`](https://pnpm.io/workspaces),
[`nx`](https://nx.dev) and
[`changesets`](https://github.com/changesets/changesets) for manage packages.

To develop a given package:

1. Run `pnpm i` in root folder
2. Run `pnpm nx dev --open @hrc/[package-name]` in root folder
3. Run `pnpm changeset` in root folder for track changes of a package
4. Commit your changes including the generated `changeset`'s

## Pull Request Guidelines

- Create a new branch from `main` and merge back against `main`

- You should use a prefix for the new branch name:

  - `build/` for build related changes
  - `feat/` for new features
  - `fix/` for bug fixes
  - `docs/` for documentation only changes
  - `refactor/` for code that neither fixes a bug nor adds a feature
  - `perf/` for performance improvements
  - `chore/` for changes related to the project configuration or dependencies
    that are not related to build process

- If adding a new feature:

  - Provide a convincing reason for the new feature, you should open a
    suggestion issue first and have it approved before working on it

- If fixing a bug:

  - Add `(fix #xxxx[,#xxxx])` (#xxxx is the issue id) in your PR title
  - Provide a detailed explanation of the bug

- It's OK to have multiple small commits as you work on the PR - Github can
  automatically squash them before merging

- Commit messages must follow the
  [commit message convention](./.github/commit-convention.md)

## Labels

Be sure to  use the correct labels for your PR / issue:

  <!-- label-color: #D4CEC2 -->

  - `package: [package-name]`
    - Example: `package: button`

  <!-- label-color: #A6C9A4 -->

  - `component: [component-name]`
    - Example: `component: RingSpinner`

You can also use the [default labels provided by Github](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/managing-labels#about-default-labels)
