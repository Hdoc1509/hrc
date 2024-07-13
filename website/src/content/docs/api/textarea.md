---
title: Textarea API
description: API reference docs for the React Textarea component
---

## Import

```js
import { Textarea } from "@hrc/input";
```

## Props

**All props are optional unless otherwise specified.**

**Additionally, it can receive all attributes/props of a `textarea` element.**

**`autosize`**

Whether the textarea should automatically resize to fit its content.

Type: `boolean`

---

**`color`**

The color variant of the textarea.

Type: `'primary' | 'secondary' | 'error' | 'info' | 'warning' | 'success'`

---

**`error`**

Whether the textarea is in an error state.

Type: `boolean`

---

**`fullWidth`**

Whether the textarea should take up the full width of its container.

Type: `boolean`

---

**`className`**

Additional class names for extending styles.

Type: `string`

---

**`helperText`**

Helper text to display below the textarea.

Type: `string`

---

**`label`**

The label of the textarea.

Type: `string`

---

**`labelClassName`**

Additional class names for extending styles of the label.

Type: `string`

## CSS Variables

You can customize the style of `<Textarea />` component by using the following
CSS variables (custom properties):

```css
.any-parent-of-textarea,
.class-to-extend-styles {
  /* NORMAL TEXTAREA */
  --textarea-bg: #ffffff;
  --textarea-bg-disabled: #aaa;

  --textarea-radius: 4px;
  --textarea-padding: 6px;

  --textarea-border-color: #888;
  --textarea-border-color-hover: #444;
  --textarea-border-color-focus: lightblue;
  --textarea-border-color-disabled: rgba(0, 0, 0, 0.26);

  --textarea-font-size: 16px;
  --textarea-font-weight: 600;
  --textarea-text: #000;
  --textarea-text-disabled: #888;

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
If you want to customize the label of the textarea, check out the [API of internal
`<Label />` component](../label).
:::

## CSS Classes

**`.textarea`**

The base styles for `<Textarea />` component.

---

**`.textarea--with-error`**

Styles for the `error` state.

---

**`.textarea--primary`**

Styles for the `primary` color variant.

---

**`.textarea--secondary`**

Styles for the `secondary` color variant.

---

**`.textarea--error`**

Styles for the `error` color variant.

---

**`.textarea--info`**

Styles for the `info` color variant.

---

**`.textarea--warning`**

Styles for the `warning` color variant.

---

**`.textarea--success`**

Styles for the `success` color variant.

---

**`.textarea--fullwidth`**

Styles for the `fullwidth` size variant.
