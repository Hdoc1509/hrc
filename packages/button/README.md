# @hrc/button

<p align="center">
  <a href="https://www.npmjs.com/package/@hrc/button">
    <img alt="npm" src="https://img.shields.io/npm/v/%40hrc%2Fbutton">
  </a>
  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/%40hrc%2Fbutton">
  <img alt="npm" src="https://img.shields.io/npm/dm/%40hrc%2Fbutton">
</p>

Simple button components for your React app

![Buttons screenshot](https://github.com/Hdoc1509/react-components/assets/72316111/f6ea1b00-a905-4bbf-97d8-81291b22303f)

> Demo generated with code from [Usage](#usage) section

## Installation

```bash
npm install @hrc/button
```

## Usage

```js
import { DeleteIcon, FavoriteIcon, SearchIcon } from "third-party-package";
import { Button, ButtonIcon, ButtonGroup } from "@hrc/button";

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

## Reducing Build Size

The default entry point includes CSS for all of the components. You have two
options to reduce the build size:

### Option 1: Use path imports

```diff
- import { Button, ButtonIcon } from "@hrc/button";
+ import { Button } from "@hrc/button/dist/Button";
+ import { ButtonIcon } from "@hrc/button/dist/ButtonIcon";
```

### Option 2: Use [`babel`](https://babeljs.io/) with [`babel-plugin-import`](https://github.com/umijs/babel-plugin-import)

1. [Setup `babel`](https://babeljs.io/setup) with your project.

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
      libraryName: "@hrc/button",
      libraryDirectory: "dist",
      camel2DashComponentName: false,
      transformToDefaultImport: false,
    },
    "@hrc/button",
  ],
];

module.exports = { plugins };
```

#### Automatic Setup with `@hrc/babel-config`

1. Install the package with the following command:

   ```bash
   npm install -D @hrc/babel-config
   ```

1. Write the following code in your `.babelrc.js` file:

   ```js
   import hrcConfig from "@hrc/babel-config";

   const plugins = [...otherPlugins, ...hrcConfig("button")];

   module.exports = { plugins };
   ```
