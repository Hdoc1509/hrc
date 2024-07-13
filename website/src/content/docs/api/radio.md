---
title: Radio API
description: API reference docs for the React Radio component
---

## Import

```js
import { Radio } from "@hrc/input";
```

## Props

:::note
**All props are optional unless otherwise specified.**

**Additionally, it can receive all attributes/props of a `input` element except
the `type` attribute.**
:::

**`value` (required)**

The value of the radio.

Type: `string`

---

**`size`**

The size variant of the radio.

Type: `'small' | 'large'`

---

**`color`**

The color variant of the radio when it is checked.

Type: `'primary' | 'secondary' | 'error' | 'info' | 'warning' | 'success'`

---

**`className`**

Additional class names for extending styles.

Type: `string`

---

**`label` (required)**

The label of the radio.

Type: `string`

---

**`labelClassName`**

Additional class names for extending styles of the label.

Type: `string`

## CSS Variables

You can customize the style of `<Radio />` component by using the following CSS
variables (custom properties):

```css
.any-parent-of-radio,
.class-to-extend-styles {
  /* NORMAL RADIO */
  --radio-bg-hover: rgba(0, 0, 0, 0.04);
  --radio-padding: 4px;
  --radio-size: 24px;

  --radio-color: #000;
  --radio-checked-color: lightblue;
  --radio-color-disabled: rgba(0, 0, 0, 0.26);

  /* COLOR VARIANTS */
  --primary: lightblue;
  --secondary: lightpink;
  --error: red;
  --warning: orange;
  --info: blue;
  --success: green;
}
```

:::note
If you want to customize the label of the radio, check out the [API of internal
`<Label />` component](../label).
:::

## CSS Classes

**`.radio`**

The base styles for `<Radio />` component.

:::note
This class is used as a wrapper for the `.radio__inner` and `.radio__icon`
elements.
:::

---

**`.radio--disabled`**

Styles for the `disabled` state.

---

**`.radio--primary`**

Styles for the `primary` color variant.

---

**`.radio--secondary`**

Styles for the `secondary` color variant.

---

**`.radio--error`**

Styles for the `error` color variant.

---

**`.radio--info`**

Styles for the `info` color variant.

---

**`.radio-warning`**

Styles for the `warning` color variant.

---

**`.radio--success`**

Styles for the `success` color variant.

---

**`.radio--small`**

Styles for the `small` size variant.

---

**`.radio--large`**

Styles for the `large` size variant.

---

**`.radio__inner`**

The base styles for the `input` element.

---

**`.radio__icon`**

The base styles for the icon element. It is responsible for displaying the icons
when the radio is checked or not.
