---
title: Icon API
description: API reference docs for the React Icon component
---

## Import

```js
import { Icon } from "@hrc/material-icons";
```

## Props

**All props are optional unless otherwise specified.**

**`name` (required)**

The name of the icon. Find the available icons at [Google Material Icons](https://fonts.google.com/icons?icon.set=Material+Icons)

Type: `string`

---

**`variant`**

The variant of the icon.

Type: `'outlined' | 'round' | 'sharp' | 'two-tone'`

---

**`disabled`**

Whether the icon is disabled.

Type: `boolean`

---

**`color`**

The color of the icon.

Type: `'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'`

---

**`size`**

The size of the icon.

Type: `'small' | 'large' | 'extra-large' | 'inherit'`

---

**`className`**

Additional class names for extending styles.

Type: `string`

## CSS Variables

You can customize the style of `<Icon />` component by using the following CSS
variables (custom properties):

```css
.any-parent,
.class-to-extend-styles {
  --icon-color: black; /* default color */
  --icon-color-disabled: gray;

  --icon-size: 24px; /* default size */
  --icon-small: 18px;
  --icon-large: 36px;
  --icon-extra-large: 48px;

  /* COLOR VARIANTS */
  --primary: lightblue;
  --secondary: lightpink;
  --error: red;
  --warning: orange;
  --info: blue;
  --success: green;
}
```

## CSS Classes

**`material-icons`**

The base styles for `<Icon />` component.

---

**`material-icons-outlined`**

Styles for the `outlined` variant.

---

**`material-icons-round`**

Styles for the `round` variant.

---

**`material-icons-sharp`**

Styles for the `sharp` variant.

---

**`material-icons-two-tone`**

Styles for the `two-tone` variant.

---

**`material-icons--disabled`**

Styles for the `disabled` state.

---

**`material-icons--primary`**

Styles for the `primary` color variant.

---

**`material-icons--secondary`**

Styles for the `secondary` color variant.

---

**`material-icons--error`**

Styles for the `error` color variant.

---

**`material-icons--warning`**

Styles for the `warning` color variant.

---

**`material-icons--info`**

Styles for the `info` color variant.

---

**`material-icons--success`**

Styles for the `success` variant.

---

**`material-icons--small`**

Styles for `small` size variant.

---

**`material-icons--large`**

Styles for `large` size variant.

---

**`material-icons--extra-large`**

Styles for `extra-large` size variant.

---

**`material-icons--inherit`**

Styles for `inherit` size variant. The font size is inherited from the parent.
