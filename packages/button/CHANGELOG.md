# @hrc/button

## 3.1.1

### Patch Changes

- Updated dependencies [785d25a]
  - @hrc/type-utils@1.1.3

## 3.1.0

### Minor Changes

- f6b879b: Use `:focus-visible`
- 2348428: Set correct border color of `column` variant of `<ButtonGroup />` (again)

## 3.0.0

### Major Changes

- 3883533: Rename css variable to set `justify-content`

  #### Migrating

  ```diff
  .my-selector {
  - --button-justify-content: flex-start;
  + --button-justify: flex-start;
  }
  ```

- 5c0b82f: Remove default text for `<Button />`

  #### Migrating

  ```diff
  - <Button color="primary">
  + <Button color="primary">Default</Button>
  ```

  #### Why?

  This change makes `<Button />` to be used as a regular HTML `button` element.

- 01009d6: Change way of handling rounded variants

  - removed `roundedSide` and `fullRounded` prop from `<Button />` and `<ButtonIcon />`
  - added `rounded` prop

  #### Migrating

  1. Remove `roundedSide` and `fullRounded` props from `<Button />` and `<ButtonIcon />`
  2. Use `rounded` prop instead

     ```diff
     function App() {
       return (
         <>
     -     <Button roundedSize="left">Left</Button>
     -     <Button roundedSize="top">Top</Button>
     -     <Button fullRounded>Full</Button>
     +     <Button rounded="left">Left</Button>
     +     <Button rounded="top">Top</Button>
     +     <Button rounded="full">Full</Button>
         </>
       );
     }
     ```

- a3f0e42: Rename prop to disable shadow

  #### Migrating

  ```diff
  function App() {
    return (
      <>
  -     <Button disableShadow>No shadow</Button>
  +     <Button noShadow>No shadow</Button>
      </>
    );
  }
  ```

  #### Why?

  It was renamed to match its corresponding class: `.button--no-shadow`

### Minor Changes

- fb270a5: Allow font family inheritance by default
- a937b74: Prevent any direct children of `<Button />` from shrinking
- 0a975e0: Add `none` rounded variant
- 5d41ccc: Add `cursor: pointer` to `<Button />`'
- 078dfa7: Removed `--button-outline-color-disabled` variable.

  #### Why?

  It's not necessary since `outline` variant relies on text color.

## 2.6.1

### Patch Changes

- 060fbf9: Generate declaration files in the same folder of its `js` files

## 2.6.0

### Minor Changes

- e8348ed: Add `@types/react` to peer dependencies

### Patch Changes

- 4cde046: Set correct border color of `column` variant of `<ButtonGroup />`
- 043a4d4: Update package homepage
- Updated dependencies [043a4d4]
  - @hrc/type-utils@1.1.2

## 2.5.0

### Minor Changes

- a55ee83: Add explicit return type to `<ButtonGroup />`

### Patch Changes

- f67ca70: Update repo url
- Updated dependencies [f67ca70]
  - @hrc/type-utils@1.1.1

## 2.4.0

### Minor Changes

- 3faca31: Handle svg icons color
- 8ef1f4f: Add `<ButtonGroup />` component
- a5d80fa: Handle svg icons size
- da1d234: Use `Size` and `Color` types from `@hdoc-react/type-utils`

### Patch Changes

- 6844207: Handle sizes for `<ButtonIcon />` correctly
- Updated dependencies [f431f53]
- Updated dependencies [5aac604]
  - @hdoc-react/type-utils@1.1.0

## 2.3.1

### Patch Changes

- Updated dependencies [7e2bf19]
  - @hdoc-react/type-utils@1.0.1

## 2.3.0

### Minor Changes

- 2be9f53: Update compatible version of dependencies

## 2.2.0

### Minor Changes

- 1baa1c4: Simplify usage of `children` for `<ButtonIcon />` component
- e3ade7e: Remove unnecessary import of `React.PropsWithChildren`
- cd02bc3: Replace dependency `type-fest` by `@hdoc-react/type-utils`
- 6f23307: Merge generated declaration files

### Patch Changes

- Updated dependencies [fcaf74b]
  - @hdoc-react/type-utils@1.0.0

## 2.1.2

### Patch Changes

- 7712ede: Update package scope

## 2.1.1

### Patch Changes

- 1144baf: Rename entry file

## 2.1.0

### Minor Changes

- da462a8: Add full rounded style

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
