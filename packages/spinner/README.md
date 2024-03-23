# @hrc/spinner

<p align="center">
  <a href="https://www.npmjs.com/package/@hrc/spinner">
    <img alt="npm" src="https://img.shields.io/npm/v/%40hrc%2Fspinner">
  </a>
  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/%40hrc%2Fspinner">
  <img alt="npm" src="https://img.shields.io/npm/dm/%40hrc%2Fspinner">
</p>

Simple spinner components for your React app

![spinner-demo](https://github.com/Hdoc1509/hrc/assets/72316111/39e458d8-d9d4-426b-aecb-a5d05fb554a2)

> Demo generated with code from [Usage](#usage) section

## Installation

```bash
npm install @hrc/spinner
```

## Usage

```js
import { RingSpinner } from "@hrc/spinner";

function App() {
  return (
    <>
      <RingSpinner size="large" color="primary" />
      <DualRingSpinner color="error" />
      <GrowingSpinner />
    </>
  );
}
```

## API

See documentation below for reference to CSS classes and some details available
for the following components:

- [`<BorderSpinner />`](./docs/BorderSpinner.md)
- [`<CircleSpinner />`](./docs/CircleSpinner.md)
- [`<DualRingSpinner />`](./docs/DualRingSpinner.md)
- [`<GrowingSpinner />`](./docs/GrowingSpinner.md)
- [`<RingSpinner />`](./docs/RingSpinner.md)

## Props

**All props are optional otherwise specified**

**All components receive the following props**

`size`

The size of the spinner.

Type: `'small' | 'large'`

---

`speed`

The speed of the spinner.

Type: `'slow' | 'fast'`

---

`color`

The color of the spinner.

Type: `'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'`

---

`className`

Additional class names for extending styles.

Type: `string`

---

## General Customization

## CSS Custom Properties

You can customize the spinner by using the following CSS custom properties:

```css
.any-parent-of-spinner,
.class-to-extend-styles {
  --spinner-size: 24px;
  --spinner-color: black; /* default color */
  --spinner-animation-duration: 1s;

  /* COLOR VARIANTS */
  --primary: lightblue;
  --secondary: lightgray;
  --error: red;
  --warning: orange;
  --info: skyblue;
  --success: green;
}
```

## CSS classes

`.spinner`

The base styles for the spinner

---

`.spinner--small`

The small styles for the spinner

---

`.spinner--large`

The large styles for the spinner

---

`.spinner--slow`

The slow styles for the spinner

---

`.spinner--fast`

The fast styles for the spinner

---

`.spinner--primary`

The primary styles for the spinner

---

`.spinner--secondary`

The secondary styles for the spinner

---

`.spinner--error`

The error styles for the spinner

---

`.spinner--warning`

The warning styles for the spinner

---

`.spinner--info`

The info styles for the spinner

---

`.spinner--success`

The success styles for the spinner

## Reducing bundle size

The default entry point includes CSS for all components. You have two options to
reduce the build size:

### Option 1: Use path imports

```diff
- import { RingSpinner, CircleSpinner } from "@hrc/spinner";
+ import { RingSpinner } from "@hrc/spinner/dist/RingSpinner";
+ import { CircleSpinner } from "@hrc/spinner/dist/CircleSpinner";
```

### Options 2: Use [`babel`](https://babeljs.io/) with [`babel-plugin-import`](https://github.com/umijs/babel-plugin-import)

1. [Setup `babel`](https://babeljs.io/setup) in your project.

1. Install the plugin with the following command:

   ```bash
   npm install -D babel-plugin-import
   ```

1. Create a `.babelrc.js` file in the root directory of your project.

#### Manual Setup

```js
const plugins = [
  ...otherPlugins,
  [
    "import",
    {
      libraryName: "@hrc/spinner",
      libraryDirectory: "dist",
      camel2DashComponentName: false,
      transformToDefaultImport: false,
    },
    "@hrc/spinner",
  ],
];

module.exports = { plugins };
```

#### Automatic Setup with [`@hrc/babel-config`](https://www.npmjs.com/package/@hrc/babel-config)

Install the package with the following command:

```bash
npm install -D @hrc/babel-config
```

Then, write the following code in your `.babelrc.js` file:

```js
import hrcConfig from "@hrc/babel-config";

const plugins = [...otherPlugins, ...hrcConfig("spinner")];

module.exports = { plugins };
```

<!-- TODO: Add info from which projects the spinners are taken and adapted from -->
