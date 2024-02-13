# @hdoc/react-button

## 2.0.1

### Patch Changes

- 50f62e1: Update docs with new way of handling button text

## 2.0.0

### Major Changes

- 954c62c: Remove `text` prop and use `children` instead

  - `<Button />` affected props:
    - removed `text`

  #### Migrating

  ```diff
  function App() {
    return (
      <>
  -     <Button text="Save" />
  +     <Button>Save</Button>
      </>
    );
  }
  ```

  #### Why

  The `text` prop has been removed from the `Button` component and replaced with
  `children`. This makes the `Button` component similar to a normal HTML `button`
  element.

- ca6955c: Rename color`danger` to `error`

  #### Migrating

  1. Rename `color` prop from `danger` to `error`

  ```diff
  function App() {
    return (
      <>
  -     <Button text="Delete" color="danger" />
  +     <Button text="Delete" color="error" />
      </>
    );
  }
  ```

  2. Rename css custom properties of `--danger` to `--error`

  ```diff
  .my-selector {
  - --danger: red;
  - --danger-hover: darkred;
  - --danger-text: white;
  - --danger-transparent: rgba(255, 0, 0, 0.5);
  + --error: red;
  + --error-hover: darkred;
  + --error-text: white;
  + --error-transparent: rgba(255, 0, 0, 0.5);
  }
  ```

- 2a65b92: Changed way of handling icons

  - `<Button />` affected props:
    - `iconStart` -> type: `ReactNode`
    - `iconEnd` -> type: `ReactNode`
    - removed `iconVariant`
  - `<ButtonIcon />` affected props:
    - accepts `children`
    - removed `icon`
    - removed `iconVariant`

  #### Migrating

  1. Change values of `iconStart` and `iconEnd` from `string` to `ReactNode`:
  2. Remove every `iconVariant`
  3. Remove `icon` from `<ButtonIcon />` and use `children`

  ```diff
  + import { SearchIcon, DeleteIcon } from "third-party-package";

  function App() {
    return (
      <>
  -     <Button text="Search" iconStart="search" />
  +     <Button text="Search" iconStart={<SearchIcon />} />
  -     <ButtonIcon icon="delete" />
  +     <ButtonIcon>
  +       <DeleteIcon />
  +     </ButtonIcon>
      </>
    );
  }
  ```

- a7573a3: Rename css custom property for change text color

  #### Migrating

  Rename css custom property from `--button-color` to `--button-text`:

  ```diff
  .my-selector {
  - --button-color: gray;
  + --button-text: gray;
  }
  ```

### Minor Changes

- 397a62d: Use `currentColor` for set outline color
- 3ce7270: Add custom property for change font size:

  - `--button-font-size`

- 6636873: Add custom properties for change flexbox layout:

  - `--button-justify-content`
  - `--button-gap`

- daaf12b: Remove `@hdoc/react-material-icons` from peer dependencies
- e50505e: Update compatible versions of peer dependencies

## 1.2.0

### Minor Changes

- e058b70: Use `clsx` as dependency
- e7bc357: Add support for round one side
- baa67cc: Use colors from internal lib `@mono/ui`
- 8f05d15: Add more color variants:

  - `info`
  - `warning`
  - `success`

- 0fc975a: Center justify the items inside button
- 24fb0a9: Add css custom properties for change font family and font weight:

  - `--button-font-family`
  - `--button-font-weight`

- 170fb54: Add explicit return type for exported components
- f9bb762: Add css custom properties for change radius and padding

  - `--button-radius`
  - `--button-padding`

### Patch Changes

- Updated dependencies [eb576d8]
- Updated dependencies [baa67cc]
  - @hdoc/react-material-icons@1.6.0

## 1.1.1

### Patch Changes

- Updated dependencies [44d7bff]
  - @hdoc/react-material-icons@1.5.0

## 1.1.0

### Minor Changes

- b96af43: Use exact version of `@hdoc/react-material-icons`

## 1.0.0

### Major Changes

- ca31df2: First release

  Added screenshot of button examples

## 0.3.0

### Minor Changes

- 9d97a57: Change property for set color of text:

  - `--button-text` -> `--button-color`
  - `--button-text-disabled` -> `--button-color-disabled`

- ef7daa9: Add ButtonIcon component
- 95dd39b: Rename prop `iconStyle` to `iconVariant` for `<Button />`
- b11c542: Use `type-fest` as a dependency

### Patch Changes

- de840f9: Set `@hdoc/react-material-icons` as external package on build
- 287f6b1: Use correct colors for rest of variants
- eab6382: Accept custom text correctly
- bae257f: Add missing keywords field
- 4051f08: Include missing declaration files

## 0.2.0

### Minor Changes

- 14cdb2a: Change props names for use icons

  - `startIcon` -> `iconStart`
  - `endIcon` -> `iconEnd`

- ff93818: Use css custom properties for change styling when hover, focus and disabled

### Patch Changes

- bb2d558: Correct package directory
