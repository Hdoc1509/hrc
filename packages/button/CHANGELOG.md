# @hdoc/react-button

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
  - `--button-paddding`

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
