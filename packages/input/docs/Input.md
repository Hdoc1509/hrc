# Input API

## Import

```js
import { Input } from "@hdoc-react/input";
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

## CSS Custom Properties

```css
/* YOU CAN USE ANY SELECTOR */
:root,
[data-theme="custom-theme"],
body.dark,
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

  /* ERROR VARIANT */
  --error: #f44336;
}
```

## CSS Clasess

`.input-wrapper`

The styles for the wrapper of the input. This is the direct parent of inner
`input` element.

:warning: **Classnames passed with `className` prop will be applied to this wrapper.**

---

`.input-wrapper--error`

The error styles for the input wrapper

---

`.input-wrapper--disabled`

The disabled styles for the input wrapper

---

`.input-wrapper--small`

The small styles for the input wrapper

---

`.input-wrapper--fullwidth`

The full width styles for the input wrapper

---

`.input-wrapper > input`

The base styles for the inner `input` element
