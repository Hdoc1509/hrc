# @hrc/input

<div align="center">

[![version](https://img.shields.io/npm/v/%40hrc%2Finput)](https://www.npmjs.com/package/@hrc/input)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/%40hrc%2Finput)
![npm downloads](https://img.shields.io/npm/dm/%40hrc%2Finput)

</div>

Simple input components for your React app

![Inputs screenshot](https://github.com/Hdoc1509/react-components/assets/72316111/b611760d-755e-4923-ba6c-3c52ceb32b2c)

## Installation

```bash
npm install @hrc/input
```

## Usage

```js
import { useState } from "react";
import { Input, Textarea, Checkbox, Radio, RadioGroup } from "@lib/main";
import { Icon } from "@hrc/material-icons";

export function PackageDemo() {
  const [hasNewsletter, setHasNewsletter] = useState(false);

  return (
    <>
      <Input
        label="Username"
        placeholder="John Doe"
        iconStart={<Icon name="people" />}
      />
      <Textarea label="Comment" placeholder="Hello world" color="secondary" />
      <Checkbox
        label="Receive newsletter"
        color="success"
        checked={hasNewsletter}
        onChange={(e) => setHasNewsletter(e.target.checked)}
      />
      <RadioGroup
        name="newsletter-frequency"
        defaultValue="weekly"
        disabled={!hasNewsletter}
      >
        <Radio label="Daily" value="daily" />
        <Radio label="Weekly" value="weekly" />
        <Radio label="Monthly" value="monthly" />
      </RadioGroup>
    </>
  );
}
```

## API

See documentation below for reference to all of the props, classes and CSS
custom properties available for the following components:

- [`<Input />`](docs/Input.md)
- [`<Textarea />`](docs/Textarea.md)
- [`<Checkbox />`](docs/Checkbox.md)

## General Customization

You can customize the label, placeholder and helper text for any of the
previously mentioned components.

### CSS Custom Properties

```css
/* YOU CAN USE ANY SELECTOR YOU WANT */
:root,
[data-theme="my-custom-theme"],
body.dark,
.any-parent,
.class-to-extend-styles {
  --placeholder-color: #636363;
  --placeholder-disabled: #434343;

  --label-font-family: "Roboto";
  --label-font-size: 14px;
  --label-font-weight: 600;
  --label-text: #828282;
  --label-text-focus: lightblue;

  /* ↓ This should be passed to .label */
  --helper-text-color: #828282;

  /* ERROR VARIANT, for label and helper text */
  --error: #f44336;
}
```

### CSS Classes

`.label`

The styles for the label

---

`.label--error`

The error styles for the label

---

`.label--fullwidth`

The full width styles for the label

---

`.helper-text`

The styles for the helper text

## Reducing Build Size

The default entry point includes CSS for all of the components. You have two
options to reduce the build size:

### Option 1: Use path imports

```diff
- import { Input, Textarea } from "@hrc/input";
+ import { Input } from "@hrc/input/dist/Input";
+ import { Textarea } from "@hrc/input/dist/Textarea";
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
      libraryName: "@hrc/input",
      libraryDirectory: "dist",
      camel2DashComponentName: false,
      transformToDefaultImport: false,
    },
    "@hrc/input",
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

const plugins = [...otherPlugins, ...hrcConfig("input")];

module.exports = { plugins };
```
