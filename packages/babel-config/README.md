# @hrc/babel-config

Create Babel config for [component packages](https://github.com/Hdoc1509/hrc#packages)
of [@hrc/monorepo](https://github.com/Hdoc1509/hrc)

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

// all packages
const plugins = [...otherPlugins, ...hrcConfig("all")];

module.exports = { plugins };
```

## Supported packages

- [`@hrc/button`](https://www.npmjs.com/package/@hrc/button)
- [`@hrc/input`](https://www.npmjs.com/package/@hrc/input)
