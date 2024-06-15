# @hrc/toggle-theme

<div align="center">

[![version](https://img.shields.io/npm/v/%40hrc%2Ftoggle-theme)](https://www.npmjs.com/package/@hrc/toggle-theme)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/%40hrc%2Ftoggle-theme)
![npm downloads](https://img.shields.io/npm/dm/%40hrc%2Ftoggle-theme)

</div>

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
:root {
  --bg-color: #fff;
  --text-color: #17181c;
}
[datat-theme="dark"] {
  --bg-color: #17181c;
  --text-color: #fff;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
}
```

## Documentation

- [Package Documentation](https://hdoc1509.github.io/hrc/packages/toggle-theme/)
