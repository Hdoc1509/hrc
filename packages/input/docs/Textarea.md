# Textarea API

## Import

```js
import { Textarea } from "@hrc/input";
```

## Props

**All props are optional unless otherwise specified.**

**Additionally it can receive all attribues of a `textarea` element.**

`error`

Whether the textarea has an error.

Type: `boolean`

---

`fullWidth`

Whether the textarea is full width, i.e., it takes up the full width of the
parent.

Type: `boolean`

---

`autosize`

Whether the textarea should autosize to fit the content.

Type: `boolean`

---

`className`

Additional class names for extending styles of textarea.

Type: `string`

---

`label`

The label of the textarea.

Type: `string`

---

`labelClassName`

Additional class names for extending styles of the label.

Type: `string`

---

`helperText`

The helper text of the textarea.

Type: `string`

## CSS Custom Properties

```css
/* YOU CAN USE ANY SELECTOR */
:root,
[data-theme="custom-theme"],
body.dark,
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

  /* ERROR VARIANT */
  --error: #f44336;
}
```

## CSS Clasess

`.textarea`

The base styles for the textarea

---

`.textarea--error`

The error styles for the textarea

---

`.textarea--fullwidth`

The full width styles for the textarea
