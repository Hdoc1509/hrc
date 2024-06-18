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

1. Import `load-theme.js` in your `index.html`:

   ```html
   <script
     type="module"
     src="/path/to/@hrc/toggle-theme/dist/load-theme.js"
   ></script>
   ```

2. Then, use the component in your project:

   ```js
   import { ThemeButton } from "@hrc/toggle-theme";
   import { Icon } from "@hrc/material-icons";

   const Light = () => {
     return (
       <>
         <Icon name="light_mode" size="large" color="warning" />
         <span>Light</span>
       </>
     );
   };

   const Dark = () => {
     return (
       <>
         <Icon name="dark_mode" size="large" color="info" />
         <span>Dark</span>
       </>
     );
   };

   export function PackageDemo() {
     return <ThemeButton lightElement={<Light />} darkElement={<Dark />} />;
   }
   ```

3. Add your styles:

   ```css
   :root {
     --bg-color: #fff;
     --text-color: #17181c;
   }
   [data-theme="dark"] {
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
