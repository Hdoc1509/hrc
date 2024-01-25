# Input API

## Import

```js
import { Input } from "@hdoc/react-input";
```

## Props

**All props are optional unless otherwise specified.**

**Additionally, it can receive all attribues of an `input` element.**

`size`

Size variant of the input.

Type: `'small'`

---

`error`

Whether the input has an error.

Type: `boolean`

---

`fullWidth`

Whether the input is full width, i.e., it takes up the full width of the parent.

Type: `boolean`

---

`iconStart`

Icon placed to the left of the input.

Type: `ReactNode`

---

`iconEnd`

Icon placed to the right of the input.

Type: `ReactNode`

---

`className`

Additional class names for extending styles of input.

Type: `string`

---

`label`

The label of the input.

Type: `string`

---

`labelClassName`

Additional class names for extending styles of the label.

Type: `string`

---

`helperText`

The helper text of the input.

Type: `string`

## CSS Clasess

`.input`

The base styles for the input

---

`.input-wrapper`

The styles for the wrapper of the input. This is the direct parent of `.input`.

:warning: **Classnames passed with `className` prop will be applied to this wrapper.**

---

`.input-wrapper--error`

The error styles for the input wrapper

---

`.input-wrapper--small`

The small styles for the input wrapper

---

`.input-wrapper--fullwidth`

The full width styles for the input wrapper

---

`.input-label`

The styles for the label of the input

---

`.input-label--error`

The error styles for the label of the input

---

`.input-label--fullwidth`

The full width styles for the label of the input

---

`.input-helper-text`

The styles for the helper text of the input
