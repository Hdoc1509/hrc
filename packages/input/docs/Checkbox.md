# Checkbox API

## Import

```js
import { Checkbox } from "@hdoc/react-input";
```

## Props

**All props are optional unless otherwise specified.**

**Additionally it can receive all attributes of an `input` element expect the
`type` attribute.**

`icon`

Icon placed when the checkbox is not checked.

type: `ReactNode`

---

`iconChecked`

Icon placed when the checkbox is checked.

type: `ReactNode`

---

`size`

Size variant of the checkbox.

type: `'small' | 'large'`

---

`color`

Color variant of the checkbox when it is checked.

type: `'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error'`

---

`className`

Additional class names for extending styles of checkbox.

type: `string`

---

`label`

The label of the checkbox.

Type: `string`

---

`labelClassName`

Additional class names for extending styles of the label.

Type: `string`

## CSS Custom Properties

```css
/* YOU CAN USE ANY SELECTOR */
:root,
[data-theme="custom-theme"],
body.dark,
.any-parent-of-textarea,
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
