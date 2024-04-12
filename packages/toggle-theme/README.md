# @hrc/toggle-theme

<p align="center">
  <a href="https://www.npmjs.com/package/@hrc/toggle-theme">
    <img alt="npm" src="https://img.shields.io/npm/v/%40hrc%2Ftoggle-theme">
  </a>
  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/%40hrc%2Ftoggle-theme">
  <img alt="npm" src="https://img.shields.io/npm/dm/%40hrc%2Ftoggle-theme">
</p>

Simple component for toggle between `light` and `dark` theme in your React app.

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

## Documentation

- [Package Documentation](https://hdoc1509.github.io/hrc/packages/toggle-theme/)
