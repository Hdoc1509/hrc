---
title: RadioGroup API
description: API reference docs for the React RadioGroup component
---

## Import

```js
import { RadioGroup } from "@hrc/input";
```

## Props

:::note
**All props are optional unless otherwise specified.**

**Additionally, it can receive all attributes/props of a `div` element.**
:::

**`options`**

The options of the radio group.

Type: `Array<{ label: string; value: string }>`

---

**`name` (required)**

The name of the radio group.

Type: `string`

---

**`value`**

The value of the radio group to be checked.

Type: `string`

---

**`defaultValue`**

The value of the radio group to be checked by default.

Type: `string`

---

**`onChange`**

The callback function to be called when a radio is checked.

Type: `(value: string) => void`

---

**`row`**

Whether the radio group should be displayed in a row direction.

Type: `boolean`

---

**`color`**

The color variant of the radio group.

Type: `'primary' | 'secondary' | 'error' | 'info' | 'warning' | 'success'`

---

**`form`**

The form id of the radio group.

Type: `string`

---

**`size`**

The size variant of the radio group.

Type: `'small' | 'large'`

---

**`disabled`**

Whether the radio group should be disabled.

Type: `boolean`

## CSS Variables

You can customize the style of `<RadioGroup />` component by using the following
CSS variables (custom properties):

```css
.any-parent-of-radio-group,
.class-to-extend-styles {
  /* NORMAL RADIO GROUP */
  --radio-group-gap: 1rem;

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

**`.radio-group`**

The base styles for `<RadioGroup />` component.

---

**`.radio-group--row`**

Styles for the `row` layout.
