# @hdoc/react-input

## 0.5.1

### Patch Changes

- de9c24b: Add missing package keywords

## 0.5.0

**This release contains backwards-incompatible changes**. To avoid picking up
releases like this, you should set a exact version or use a version range syntax
that only accepts patch upgrades, i.e. `^0.4.0` or `~0.4.0`, in your `package.json`

### Minor Changes

- 49d9902: Changed way of handling icons

  - `<Input />` affected props:
    - `iconStart` -> type: `ReactNode`
    - `iconEnd` -> type: `ReactNode`
    - removed `iconVariant`

  #### Migrating

  1. Change values of `iconStart` and `iconEnd` from `string` to `ReactNode`.
  2. Remove every `iconVariant`

  ```js
  // BEFORE
  function App() {
    return (
      <>
        <Input placeholder="Password" iconStart="lock" />
      </>
    );
  }

  // NOW
  import { LockIcon } from `third-party-package`;

  function App() {
    return (
      <>
        <Input placeholder="Password" iconStart={<LockIcon />} />
      </>
    );
  }
  ```

- bade734: Add more css custom proerties for `input`, `label` and `textarea`:

  - `--input-gap`
  - `--input-radius`
  - `--input-padding`
  - `--input-font-size`
  - `--label-font-size`
  - `--textarea-padding`

## 0.4.0

### Minor Changes

- 24fb0a9: Add css custom properties for change font family and font weight:

  - `--input-font-weight`
  - `--label-font-family`
  - `--label-font-weight`

- 57a7f1b: Auto resize `<Textarea />` component to fit its content
- 0c98cbe: Use colors from `@mono/ui`
- 09dab8b: Add an asterisk char to label when input is required
- 2fb6172: Add `<Textarea />` component
- 8a4b8f9: Remove css rules for handle colors of icons

### Patch Changes

- Updated dependencies [eb576d8]
- Updated dependencies [baa67cc]
  - @hdoc/react-material-icons@1.6.0

## 0.3.2

### Patch Changes

- e6436e0: Remove optional use of some peer dependencies:

  - `@hdoc/react-material-icons`
  - `@material-design-icons/font`

  These will be used as normal peer dependencies.

## 0.3.1

### Patch Changes

- Updated dependencies [44d7bff]
  - @hdoc/react-material-icons@1.5.0

## 0.3.0

### Minor Changes

- 666bf69: Use exact version of `@hdoc/react-material-icons`

## 0.2.0

### Minor Changes

- a94c70e: Use `clsx` as dependency
- 58c6a5d: Set some peer dependencies as optional:

  - `@hdoc/react-material-icons`
  - `@material-design-icons/font`

### Patch Changes

- 06358ff: Correct package directory

## 0.1.0

### Minor Changes

- 4da2898: Initial beta release
