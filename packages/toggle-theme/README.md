# @hrc/toggle-theme

<p align="center">
  <a href="https://www.npmjs.com/package/@hrc/toggle-theme">
    <img alt="npm" src="https://img.shields.io/npm/v/%40hrc%2Ftoggle-theme">
  </a>
  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/%40hrc%2Ftoggle-theme">
  <img alt="npm" src="https://img.shields.io/npm/dm/%40hrc%2Ftoggle-theme">
</p>

Simple component for toggle between `light` and `dark` theme in your React app.

![Theme Button gif](https://github.com/Hdoc1509/react-components/assets/72316111/53cf9717-472c-41f5-95df-260d3dda009a)

- It saves the theme in `localStorage` with the key `theme`.
- If there is no theme in `localStorage`, the default is the user's preferred
  theme.

## Installation

```bash
npm install @hrc/toggle-theme
```

## Usage

First, import `load-theme.js` in your `index.html`:

```html
<script
  type="module"
  src="/path/to/@hrc/toggle-theme/dist/load-theme.js"
></script>
```

Then, in your `App.jsx` or another file:

```js
import { ThemeButton } from "@hrc/toggle-theme";

function App() {
  return (
    <>
      <ThemeButton
        lightElement={<span>Light</span>}
        darkElement={<span>Dark</span>}
        fullRounded
      />
    </>
  );
}
```

Finally, you will need to add your styles manually:

```css
body {
  background-color: var(--bg-color, #fff);
  color: var(--text-color, #000);
}

.my-class {
  color: var(--my-text-color, #000);
}

/* FOR LIGHT THEME: */
/* This is usually unnecessary. */
[data-theme="light"] {
  --bg-color: #fff;
  --text-color: #000;
  --my-text-color: #000;
}
[data-theme="light"] .my-class {
  --my-text-color: #000;
  /* or */
  color: #000;
}

/* FOR DARK THEME: */
[data-theme="dark"] {
  --bg-color: #242424;
  --text-color: #fff;
  --my-text-color: #fff;
}
[data-theme="dark"] .my-class {
  --my-text-color: #fff;
  /* or */
  color: #fff;
}
```

## Props

`lightElement`

Element to render when the theme is `light`.

Type: `ReactNode`

---

`darkElement`

Element to render when the theme is `dark`.

Type: `ReactNode`

---

`fullRounded`

Whether to render the button with rounded corners as a circle.

Type: `boolean`

## CSS classes

`theme-button`

Default class name

---

`theme-button--full-rounded`

Styles the button as a circle when `fullRounded=true`

## Customization

You can customize the background color of the button with the following CSS custom properties:

```css
.theme-button {
  --button-bg: #fff;
  --button-bg-hover: #eee;
  --button-bg-active: #ddd;
}

/* The same custom properties applies for dark theme. */
[data-theme="dark"] .theme-button {
  --button-bg: #333;
  --button-bg-hover: #444;
  --button-bg-active: #555;
}
```
