---
title: Button API
description: API reference docs for the React Button component
---

## Import

```js
import { Button } from "@hrc/button";
```

## Props

:::note
**All props are optional unless otherwise specified.**

**Additionally, it can receive all attributes/props of a `button` element.**
:::

**`children` (required)**

Text to display.

Type: `ReactNode`

---

**`color`**

The color variant of the button.

Type: `'primary' | 'secondary' | 'error' | 'info' | 'warning' | 'success'`

---

**`noShadow`**

Whether the shadow is disabled.

Type: `boolean`

---

**`rounded`**

The rounded variant of the button.

Type: `'top' | 'bottom' | 'left' | 'right' | 'full' | 'none'`

---

**`size`**

The size variant of the button.

Type: `'small' | 'large'`

---

**`variant`**

The aspect variant of the button.

Type: `'outline' | 'text'`

---

**`className`**

Additional class names for extending styles.

Type: `string`

---

**`iconStart`**

Icon placed before the text.

Type: `ReactNode`

---

**`iconEnd`**

Icon placed after the text.

Type: `ReactNode`

## CSS Variables

You can customize the style of `<Button />` component by using the following CSS
variables (custom properties):

```css
.any-parent-of-button,
.class-to-extend-styles {
  /* NORMAL BUTTON */
  --button-justify: flex-start;
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
  --button-shadow-focus-visible: 0 0 0 1px gray;

  /* COLOR VARIANTS: primary | secondary | error | info | warning | success */
  /* --[color]: <color> */
  /* background color - outline and text color when is `outline` variant */
  --primary: blue;

  /* --[color]-hover: <color> */
  /* background color on hover */
  --primary-hover: darkblue;

  /* --[color]-text: <color> */
  --primary-text: white;

  /* --[color]-transparent: <color> */
  /* background color on hover when is `outline` or `text` variant */
  --primary-transparent: rgba(0, 0, 255, 0.1);

  /* OUTLINE AND TEXT VARIANTS */
  --button-outline-color: white; /* outline and font color */
  --button-outline-bg-hover: black;
}
```

## CSS Classes

**`.button`**

The base styles for `<Button />` component.

---

**`.button--primary`**

Styles for the `primary` color variant.

---

**`.button--secondary`**

Styles for the `secondary` color variant.

---

**`.button--error`**

Styles for the `error` color variant.

---

**`.button--warning`**

Styles for the `warning` color variant.

---

**`.button--info`**

Styles for the `info` color variant.

---

**`.button--success`**

Styles for the `success` variant.

---

**`.button--no-shadow`**

Styles for the `no shadow` variant.

---

**`.button--small`**

Styles for the `small` size variant.

---

**`.button--large`**

Styles for the `large` size variant.

---

**`.button--rounded-top`**

Styles for the `top` rounded variant.

---

**`.button--rounded-right`**

Styles for the `right` rounded variant.

---

**`.button--rounded-bottom`**

Styles for the `bottom` rounded variant.

---

**`.button--rounded-left`**

Styles for the `left` rounded variant.

---

**`.button--rounded-full`**

Styles for the `full` rounded variant.

---

**`.button--rounded-none`**

Styles for the `none` rounded variant.

---

**`.button--outline`**

Styles for the `outline` aspect variant.

---

**`.button--text`**

Styles for the `text` aspect variant.
