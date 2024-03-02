# Checkbox API

## Import

```js
import { Checkbox } from "@hdoc-react/input";
```

## Props

**All props are optional unless otherwise specified.**

**Additionally it can receive all attributes of an `input` element except the
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

## CSS Classes

`.checkbox`

The styles for the wrapper of the checkbox. This is the direct parent of inner
`input` and `.checkbox` elements.

:warning: **Classname passed with `className` prop will be applied to this wrapper.**

---

`.checkbox--disabled`

The disabled styles for the checkbox.

---

`.checkbox--primary`

The primary styles for the checkbox.

---

`.checkbox--secondary`

The secondary styles for the checkbox.

---

`.checkbox--error`

The error styles for the checkbox.

---

`.checkbox--info`

The info styles for the checkbox.

---

`.checkbox--warning`

The warning styles for the checkbox.

---

`.checkbox--success`

The success styles for the checkbox.

---

`.checkbox--small`

The small styles for the checkbox.

---

`.checkbox--large`

The large styles for the checkbox.

---

`.checkbox__inner`

The base styles for the `input__inner` element, i.e., the `input` html element.

---

`.checkbox__icon`

The base styles for the `.checkbox__icon` element. It is responsible for
rendering the icons when the checkbox is checked or not.
