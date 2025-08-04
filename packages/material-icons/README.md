# @hrc/material-icons

<div align="center">

[![version](https://img.shields.io/npm/v/%40hrc%2Fmaterial-icons)](https://www.npmjs.com/package/@hrc/material-icons)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/%40hrc%2Fmaterial-icons)
![npm downloads](https://img.shields.io/npm/dm/%40hrc%2Fmaterial-icons)

</div>

Simple component for Material Design Icons font in your React app.

## Installation

```bash
npm install @hrc/material-icons @material-design-icons/font
```

## Usage

1. Import `@material-design-icons/font` in your entry file (example:
   `src/main.jsx` in [Vite](https://vitejs.dev/)):

   ```js
   import "@material-design-icons/font";
   ```

   > [!NOTE]
   > Check [@material-design-icons/font docs][mdi-font-docs] for more info.

2. Then, in your `App.jsx` or another file:

   ```js
   import { Icon } from "@hrc/material-icons";

   export function PackageDemo() {
     return (
       <>
         <Icon name="lock" variant="outlined" size="small" />
         <Icon name="favorite" color="error" />
         <Icon name="face" color="secondary" />
         <Icon name="description" color="primary" size="large" />
       </>
     );
   }
   ```

## Documentation

- [Package Documentation](https://hdoc1509.github.io/hrc/packages/material-icons/)

[mdi-font-docs]: https://www.npmjs.com/package/@material-design-icons/font#usage
