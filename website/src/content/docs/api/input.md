---
title: Input API
description: API reference docs for the React Input component
---

## Import

```js
import { Input } from "@hrc/input";
```

## Props

:::note
**All props are optional unless otherwise specified.**

**Additionally, it can receive all attributes/props of an `input` element.**
:::

**`size`**

The size variant of the input.

Type: `'small'`

---

**`color`**

The color variant of the input.

Type: `'primary' | 'secondary' | 'error' | 'info' | 'warning' | 'success'`

---

**`error`**

Whether the input is in an error state.

Type: `boolean`

---

**`fullWidth`**

Whether the input should take up the full width of its container.

Type: `boolean`

---

**`iconStart`**

Icon to display on the left side of the input.

Type: `ReactNode`

---

**`iconEnd`**

Icon to display on the right side of the input.

Type: `ReactNode`

---

**`className`**

Additional class names for extending styles.

Type: `string`

---

**`helperText`**

Helper text to display below the input.

Type: `string`

---

**`label`**

The label of the input.

Type: `string`

---

**`labelClassName`**

Additional class names for extending styles of the label.

Type: `string`

## CSS Variables

You can customize the style of `<Input />` component by using the following
CSS variables (custom properties):

```css
.any-parent-of-input,
.class-to-extend-styles {
  /* NORMAL INPUT */
  --input-gap: 8px;

  --input-bg: #ffffff;
  --input-bg-disabled: #aaa;

  --input-radius: 4px;
  --input-padding: 8px 12px;

  --input-border-color: #888;
  --input-border-color-hover: #444;
  --input-border-color-focus: lightblue;
  --input-border-color-disabled: rgba(0, 0, 0, 0.26);

  --input-font-size: 16px;
  --input-font-weight: 600;
  --input-text: #000;
  --input-text-disabled: #888;

  --placeholder-color: #636363;
  --placeholder-disabled: #434343;

  /* COLOR VARIANTS */
  --primary: lightblue;
  --secondary: lightpink;
  --error: red; /* also used for error state */
  --warning: orange;
  --info: blue;
  --success: green;
}
```

:::note
If you want to customize the label of the input, check out the [API of internal
`<Label />` component](../label).
:::

## CSS Classes

**`.input`**

The base styles for `<Input />` component.

:::note
This class is used as a wrapper for the `.input__inner` element.
:::

---

**`.input--with-error`**

Styles for the `error` state.

---

**`.input--disabled`**

Styles for the `disabled` state.

---

**`.input--primary`**

Styles for the `primary` color variant.

---

**`.input--secondary`**

Styles for the `secondary` color variant.

---

**`.input--error`**

Styles for the `error` color variant.

---

**`.input--info`**

Styles for the `info` color variant.

---

**`.input--warning`**

Styles for the `warning` color variant.

---

**`.input--success`**

Styles for the `success` color variant.

---

**`.input--small`**

Styles for the `small` size variant.

---

**`.input--fullwidth`**

Styles for the `fullwidth` size variant.

---

**`.input__inner`**

The base styles for the `input` element.
