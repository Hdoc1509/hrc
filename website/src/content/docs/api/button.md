---
title: Button API
sidebar:
  label: Button
description: API reference docs for the React Button component
---

## Import

```js
import { Button } from "@hrc/button";
```

## Props

**All props are optional unless otherwise specified.**

**Additionally, it can receive all attributes/props of a `button` element.**

**`variant`**

The variant of the button.

Type: `'outline' | 'text'`

---

**`disableShadow`**

Whether the shadow is disabled.

Type: `boolean`

---

**`iconStart`**

Icon placed before the text.

Type: `ReactNode`

---

**`iconEnd`**

Icon placed after the text.

Type: `ReactNode`

---

**`size`**

Size for the button.

Type: `'small' | 'large'`

---

**`color`**

The color variant of the button.

Type: `'primary' | 'secondary' | 'error' | 'info' | 'warning' | 'success'`

---

**`roundedSide`**

The side of the button to round.

Type: `'top' | 'bottom' | 'left' | 'right'`

---

**`className`**

Additional class names for extending styles.

Type: `string`

## CSS Variables

You can customize the style of `<Button />` component by using the following CSS
variables (custom properties):

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

**`.button--info`**

Styles for the `info` color variant.

---

**`.button--warning`**

Styles for the `warning` color variant.

---

**`.button--success`**

Styles for the `success` variant.

---

**`.button--no-shadow`**

Styles for no shadow variant.

---

**`.button--small`**

Styles for `small` size variant.

---

**`.button--large`**

Styles for `large` size variant.

---

**`.button--top-rounded`**

Styles for top-rounded variant.

---

**`.button--bottom-rounded`**

Styles for bottom-rounded variant.

---

**`.button--left-rounded`**

Styles for left-rounded variant.

---

**`.button--right-rounded`**

Styles for right-rounded variant.

---

**`.button--full-rounded`**

Styles for full-rounded variant.

---

**`.button--outline`**

Styles for `outline` variant.

---

**`.button--text`**

Styles for `text` variant.
