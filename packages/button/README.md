# @hdoc/react-button

<p align="center">
  <a href="https://www.npmjs.com/package/@hdoc/react-button">
    <img alt="npm" src="https://img.shields.io/npm/v/%40hdoc%2Freact-button">
  </a>
  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/%40hdoc%2Freact-button">
  <img alt="npm" src="https://img.shields.io/npm/dm/%40hdoc%2Freact-button">
</p>

Simple button components for your React app

![Buttons screenshot](https://github.com/Hdoc1509/react-components/assets/72316111/5d5af760-6839-4713-9cab-b4503cb72c7d)

## Installation

```bash
npm install @hdoc/react-button
```

## Usage

```js
import { DeleteIcon, FavoriteIcon } from "third-party-package";
import { Button, ButtonIcon } from "@hdoc/react-button";

function App() {
  return (
    <>
      <Button size="large" color="primary" iconEnd={<DeleteIcon />}>
        Delete
      </Button>
      <ButtonIcon color="danger">
        <FavoriteIcon />
      </ButtonIcon
    </>
  );
}
```

## API

See documentation below for reference to all of the props available for the
button components:

- [`<Button />`](docs/Button.md)
- [`<ButtonIcon />`](docs/ButtonIcon.md)

## General Customization

### CSS Custom Properties

You can customize any of the button components by using the following CSS
custom properties:

```css
.any-parent-of-button,
.class-to-extend-styles {
  /* NORMAL BUTTON */
  --button-justify-content: flex-start;
  --button-gap: 10px;

  --button-bg: lightgray;
  --button-bg-hover: darkgray;
  --button-bg-disabled: gray;

  --button-text: black;
  --button-text-disabled: gray;

  --button-font-family: "Arial";
  --button-font-size: 1rem;
  --button-font-weight: bold;

  --button-padding: 10px;
  --button-radius: 10px;
  --button-shadow: 0 0 0 1px black;

  /* COLOR VARIANTS: primary | secondary | error | info | warning | success */
  --primary: blue; /* background and outline color */
  --primary-hover: darkblue;
  --primary-text: white;
  --primary-transparent: rgba(0, 0, 255, 0.1);

  /* OUTLINE AND TEXT VARIANTS */
  --button-outline-color: white; /* border and font color */
  --button-outline-bg-hover: black;
}
```

### CSS Classes

`.button`

The base styles for the button

---

`.button--icon`

Stylize the button to fit an icon. Used for `<ButtonIcon />`

---

`.button--small`

Styles for small variant

---

`.button--large`

Styles for large variant

---

`.button--outline`

Styles for outline variant

---

`.button--text`

Styles for text variant

---

`.button--primary`

Styles for the primary variant

---

`.button--secondary`

Styles for the secondary variant

---

`.button--error`

Styles for the error variant

---

`.button--info`

Styles for the info variant

---

`.button--warning`

Styles for the warning variant

---

`.button--success`

Styles for the success variant
