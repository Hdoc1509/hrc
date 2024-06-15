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

Import `@material-design-icons/font` in your entry file (example: src/main.jsx in Vite):

```js
import "@material-design-icons/font";
```

<!-- TODO: Add this info message to website -->

> :information_source: Check [@material-design-icons/font docs](https://www.npmjs.com/package/@material-design-icons/font#usage) for more info.

Then, in your `App.jsx` or another file:

```js
import { Icon } from "@hrc/material-icons";

function App() {
  return (
    <>
      <Icon name="shopping_cart" size="large" variant="outlined" />
    </>
  );
}
```

## Documentation

- [Package Documentation](https://hdoc1509.github.io/hrc/packages/material-icons/)
