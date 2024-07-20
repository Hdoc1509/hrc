# @hrc/toggle-theme

## 2.3.0

### Minor Changes

- a7b3bd9: Add util `loadTheme()`
- dd00b3c: Add aria label

## 2.2.0

### Minor Changes

- fd0ac9a: Apply theme to `document.documentElement` instead of `document.body`
- 94bbdb9: Save user's preferred theme when getting theme
- e8348ed: Add `@types/react` to peer dependencies
- 06a15f3: Use colors with opacity for `hover` and `active` styles

### Patch Changes

- 043a4d4: Update package homepage

## 2.1.6

### Patch Changes

- f67ca70: Update repo url
- 09e3078: Improve package description

## 2.1.5

### Patch Changes

- 1e423d5: Explain how the theme is set

## 2.1.4

### Patch Changes

- 1144baf: Rename entry file

## 2.1.3

### Patch Changes

- 677f6e9: Use correct syntax for add demo gif

## 2.1.2

### Patch Changes

- 9c81ea5: Add demo gif

## 2.1.1

### Patch Changes

- ca0dcee: Update keywords

## 2.1.0

### Minor Changes

- f3d6186: Update compatible versions of peerDependencies

  - `react`: `^17.0.0 || ^18.0.0`
  - `react-dom`: `^17.0.0 || ^18.0.0`

### Patch Changes

- a89f1b0: Correct misspelling for peerDependencies field

## 2.0.3

### Patch Changes

- 0bf661f: Rename package directory to `toggle-theme`

## 2.0.2

### Patch Changes

- 40934ce: Update repository-related metadata

## 2.0.1

### Patch Changes

- 9a1a8da: Add badges to README

## 2.0.0

### Major Changes

- 3aadcf5: Changed custom properties for customize background color

  #### Removed properties

  - `--hover-light-bg-color`
  - `--active-light-bg-color`
  - `--hover-dark-bg-color`
  - `--active-dark-bg-color`

  #### Added properties

  - `--button-bg`

  #### Migrating

  1. Replace `--hover-light-bg-color` and `--hover-dark-bg-color` with `--button-bg-hover`
  2. Replace `--active-light-bg-color` and `--active-dark-bg-color` with `--button-bg-active`
  3. For change background color on dark mode you can use the folloing:

  ```css
  [data-theme="dark"] .theme-button {
    --button-bg: #1e1e1e;
    --button-bg-hover: #3e3e3e;
    --button-bg-active: #8e8e8e;
  }
  ```

## 1.0.1

### Patch Changes

- f81f5c7: Add missing LICENSE file

## 1.0.0

### Major Changes

- Initial release of all external packages.
