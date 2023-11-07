# Textarea API

## Import

```js
import { Textarea } from "@hdoc/react-input";
```

## Props

**All props are optional unless otherwise specified.
Additionally it can receive all attribues of a `textarea` element.**

`error`

Whether the input has an error.

Type: `boolean`

---

`fullWidth`

Whether the input is full width, i.e., it takes up the full width of the parent.

Type: `boolean`

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

`.input--textarea`

The base styles for the textarea

---

`.input-wrapper`

The styles for the wrapper of the textarea. This is the direct parent of `.input--textarea`.

:warning: **Classnames passed with `className` prop will be applied to this wrapper.**

---

`.input-wrapper--textarea`

The styles for the wrapper to fit the textarea

---

`.input-wrapper--error`

The error styles for the input wrapper

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
