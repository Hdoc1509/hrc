# @hrc/material-icons

## 2.3.0

### Minor Changes

- e8348ed: Add `@types/react` to peer dependencies
- e6ca94d: Add `extra-large` size
- da8aa6b: Set `user-select: none` to prevent icon from highlighting

### Patch Changes

- 043a4d4: Update package homepage

## 2.2.1

### Patch Changes

- f67ca70: Update repo url
- 09e3078: Improve package description

## 2.2.0

### Minor Changes

- c98e1f7: Add `inherit` size variant
- 246fc0e: Set `aria-hidden` attribute

## 2.1.0

### Minor Changes

- 82a5c0b: Prevent icon from highlighting
- 6f23307: Merge generated declaration files

## 2.0.1

### Patch Changes

- 1144baf: Rename entry file

## 2.0.0

### Major Changes

- c35a6ed: Rename css custom properties for color variants

  #### Migrating

  Remove `--icon-color-` prefix:

  ```diff
  - --icon-color-primary: lightblue;
  - --icon-color-secondary: #2c3e50;
  - --icon-color-error: red;
  - --icon-color-warning: orange;
  - --icon-color-info: blue;
  - --icon-color-success: green;
  + --primary: lightblue;
  + --secondary: #2c3e50;
  + --error: red;
  + --warning: orange;
  + --info: blue;
  + --success: green;
  ```

## 1.6.0

### Minor Changes

- eb576d8: Export type `IconProps`
- baa67cc: Use colors from internal lib `@mono/ui`

## 1.5.0

### Minor Changes

- 44d7bff: Add built-in styles for primary and secondary color variants

## 1.4.0

### Minor Changes

- d1e29c9: Use `clsx` as dependency

## 1.3.0

### Minor Changes

- 4fe9cdd: Add support for customize icon sizes

### Patch Changes

- e40686c: Add missing keywords field
- 84dc172: Improve display of css classes

## 1.2.0

### Minor Changes

- 03519f3: Update compatible versions of peerDependencies

  - `react`: `^17.0.0 || ^18.0.0`
  - `react-dom`: `^17.0.0 || ^18.0.0`
  - `@material-design-icons/font`: `^0.14.0`

## 1.1.4

### Patch Changes

- 25edf03: Rename package directory to `material-icons`

## 1.1.3

### Patch Changes

- c7d8b1d: Update repository-related metadata

## 1.1.2

### Patch Changes

- a53c519: Add missing package description

## 1.1.1

### Patch Changes

- a45ff53: Add badges to README

## 1.1.0

### Minor Changes

- 6262872: Add support for change colors with css custom properties

## 1.0.0

### Major Changes

- Initial release of all external packages.
