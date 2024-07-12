---
title: Checkbox API
description: API reference docs for the React Checkbox component
---

## Import

```js
import { Checkbox } from "@hrc/input";
```

## Props

**All props are optional unless otherwise specified.**

**Additionally, it can receive all attributes/props of a `input` element except
the `type` attribute.**

**`icon`**

Icon to display when the checkbox is not checked.

Type: `ReactNode`

---

**`iconChecked`**

Icon to display when the checkbox is checked.

Type: `ReactNode`

---

**`size`**

The size variant of the checkbox.

Type: `'small' | 'large'`

---

**`color`**

The color variant of the checkbox when it is checked.

Type: `'primary' | 'secondary' | 'error' | 'info' | 'warning' | 'success'`

---

**`className`**

Additional class names for extending styles.

Type: `string`

---

**`label`**

The label of the checkbox.

Type: `string`

---

**`labelClassName`**

Additional class names for extending styles of the label.

Type: `string`

## CSS Variables

You can customize the style of `<Checkbox />` component by using the following
CSS variables (custom properties):

```css
.any-parent-of-checkbox,
.class-to-extend-styles {
  /* NORMAL CHECKBOX */
  --checkbox-bg-hover: rgba(0, 0, 0, 0.04);
  --checkbox-padding: 4px;
  --checkbox-size: 24px;

  --checkbox-color: #000;
  --checkbox-checked-color: lightblue;
  --checkbox-color-disabled: rgba(0, 0, 0, 0.26);

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

**`.checkbox`**

The base styles for `<Checkbox />` component.

:::note
This class is used as a wrapper for the `.checkbox__inner` and `.checkbox__icon`
elements.
:::

---

**`.checkbox--disabled`**

Styles for the `disabled` state.

---

**`.checkbox--primary`**

Styles for the `primary` color variant.

---

**`.checkbox--secondary`**

Styles for the `secondary` color variant.

---

**`.checkbox--error`**

Styles for the `error` color variant.

---

**`.checkbox--info`**

Styles for the `info` color variant.

---

**`.checkbox-warning`**

Styles for the `warning` color variant.

---

**`.checkbox--success`**

Styles for the `success` color variant.

---

**`.checkbox--small`**

Styles for the `small` size variant.

---

**`.checkbox--large`**

Styles for the `large` size variant.

---

**`.checkbox__inner`**

The base styles for the `input` element.

---

**`.checkbox__icon`**

The base styles for the icon element. It is responsible for displaying the icons
when the checkbox is checked or not.
