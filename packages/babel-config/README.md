# @hrc/babel-config

Create a Babel config for component packages of [`<hrc
/>`](https://hdoc1509.github.io/hrc/) to reduce bundle size.

> [!NOTE]
> If your project supports [`Vite`](https://vitejs.dev/), you can use
> [`vite-plugin-hrc-import`](https://hdoc1509.github.io/hrc/packages/vite-plugin-hrc-import)
> instead.

## Installation

```bash
npm install -D @hrc/babel-config babel-plugin-import
```

## Usage

In your `.babelrc.js` file:

```js
import hrcConfig from "@hrc/babel-config";

// single package
const plugins = [
  // ...otherPlugins,
  ...hrcConfig("input"),
];

// multiple packages
const plugins = [
  // ...otherPlugins,
  ...hrcConfig(["button", "input"]),
];

// all supported packages
const plugins = [
  // ...otherPlugins,
  ...hrcConfig("all"),
];

module.exports = { plugins };
```

## Documentation

- [Package Documentation](https://hdoc1509.github.io/hrc/packages/babel-config)
