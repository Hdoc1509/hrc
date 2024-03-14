# @hrc/spinner

<p align="center">
  <a href="https://www.npmjs.com/package/@hrc/spinner">
    <img alt="npm" src="https://img.shields.io/npm/v/%40hrc%2Fspinner">
  </a>
  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/%40hrc%2Fspinner">
  <img alt="npm" src="https://img.shields.io/npm/dm/%40hrc%2Fspinner">
</p>

Simple spinner component for your React app

![demo](https://github.com/Hdoc1509/react-components/assets/72316111/c95fda1c-1ade-4b94-8929-bfeb5a9782a0)

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
      <RingSpinner />
    </>
  );
}
```

## Props

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

## Customization

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

`.ring-spinner`

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
