# @hdoc-react/button

<p align="center">
  <a href="https://www.npmjs.com/package/@hdoc-react/button">
    <img alt="npm" src="https://img.shields.io/npm/v/%40hdoc-react%2Fbutton">
  </a>
  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/%40hdoc-react%2Fbutton">
  <img alt="npm" src="https://img.shields.io/npm/dm/%40hdoc-react%2Fbutton">
</p>

Simple button components for your React app

![Buttons screenshot](https://github.com/Hdoc1509/react-components/assets/72316111/f6ea1b00-a905-4bbf-97d8-81291b22303f)

> Demo generated with code from [Usage](#usage) section

## Installation

```bash
npm install @hdoc-react/button
```

## Usage

```js
import { DeleteIcon, FavoriteIcon, SearchIcon } from "third-party-package";
import { Button, ButtonIcon, ButtonGroup } from "@hdoc-react/button";

function App() {
  return (
    <>
      <Button size="large" color="primary" iconEnd={<DeleteIcon />}>
        Delete
      </Button>
      <ButtonIcon color="error">
        <FavoriteIcon />
      </ButtonIcon
      <ButtonGroup>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
        <ButtonIcon>
          <SearchIcon />
        </ButtonIcon>
      </ButtonGroup>
    </>
  );
}
```

## API

See documentation below for reference to all of the props, classes and CSS
variables (custom properties) available for the following components:

- [`<Button />`](docs/Button.md)
- [`<ButtonIcon />`](docs/ButtonIcon.md)
- [`<ButtonGroup />`](docs/ButtonGroup.md)

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

`.button--no-shadow`

Styles for no shadow variant

---

`.button--small`

Styles for small variant

---

`.button--large`

Styles for large variant

---

`.button--top-rounded`

Styles for top-rounded variant

---

`.button--bottom-rounded`

Styles for bottom-rounded variant

---

`.button--left-rounded`

Styles for left-rounded variant

---

`.button--right-rounded`

Styles for right-rounded variant

---

`.button--full-rounded`

Styles for full-rounded variant

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
