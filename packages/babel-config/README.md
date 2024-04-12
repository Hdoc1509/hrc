# @hrc/babel-config

Create a Babel config for component packages of [`<hrc
/>`](https://hdoc1509.github.io/hrc/)

## Installation

```bash
npm install @hrc/babel-config babel-plugin-import
```

## Usage

In your `.babelrc.js` file:

```js
import hrcConfig from "@hrc/babel-config";

// single package
const plugins = [...otherPlugins, ...hrcConfig("input")];

// multiple packages
const plugins = [...otherPlugins, ...hrcConfig(["button", "input"])];

// all supported packages
const plugins = [...otherPlugins, ...hrcConfig("all")];

module.exports = { plugins };
```

## Documentation

- [Package Documentation](https://hdoc1509.github.io/hrc/packages/babel-config)
