# vite-plugin-hrc-import

Automatically use path import for components of
[`hrc`](https://hdoc1509.github.io/hrc/getting-started/#components) packages to
reduce bundle size.

> [!NOTE]
> If your project does not support [`Vite`](https://vitejs.dev/), you can use
> [`@hrc/babel-config`](https://hdoc1509.github.io/hrc/packages/babel-config)
> instead.

## Installation

```bash
npm install -D vite-plugin-hrc-import
```

## Usage

In your `vite.config.js` file:

```js
import hrcImportPlugin from "vite-plugin-hrc-import";

export default defineConfig({
  plugins: [hrcImportPlugin()],
});
```

## Documentation

- [Package Documentation](https://hdoc1509.github.io/hrc/packages/vite-plugin-hrc-import)
