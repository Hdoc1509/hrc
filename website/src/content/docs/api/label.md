---
title: Label (internal) API
description: API reference docs for the internal React Label component
---

:::note
This component is not meant to be used directly. It is used by other components
of [`@hrc/input`](/hrc/packages/input).
:::

## CSS Variables

You can customize the style of `<Label />` component by using the following CSS
Variables (custom properties):

```css
.any-parent-of-label,
.class-to-extend-styles {
  --label-justify: flex-start;
  --label-gap: 8px;

  --label-font-family: "Roboto";
  --label-font-size: 14px;
  --label-font-weight: 600;
  --label-text: #828282;
  --label-text-focus: lightblue;

  /* helper-text should be styled on the same level as the label */
  --helper-text-color: #828282;

  /* COLOR VARIANTS */
  --primary: lightblue;
  --secondary: lightpink;
  --error: red; /* also used for error state */
  --warning: orange;
  --info: blue;
  --success: green;
}
```

## CSS Classes

**`.label`**

The base styles for the `<Label />` component.

---

**`.label--row`**

Styles for the label to be displayed in a row.

---

**`.label--checkbox`**

Style for the label to be used with `<Checkbox />` component.

---

**`.label--radio`**

Style for the label to be used with `<Radio />` component.

---

**`.label--with-error`**

Styles for the `error` state.

---

**`.label--disabled`**

Styles for the `disabled` state.

---

**`.label--fullwidth`**

Styles for the `fullwidth` size variant.

---

**`.helper-text`**

The base styles for the helper text.

:::note
The helper text is used as chilren of the `<Label />` component.
:::
