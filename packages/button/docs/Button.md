# Button API

## Import

```jsx
import { Button } from "@hdoc/react-button";
```

## Props

**All props are optional unless otherwise specified.**

**Additionally, it can receive all attributes of a `button` element.**

`variant`

The variant of the button.

Type: `'outline' | 'text'`

---

`disableShadow`

Whether the shadow is disabled.

Type: `boolean`

---

`iconStart`

Icon placed before the text

Type: `ReactNode`

---

`iconEnd`

Icon placed after the text

Type: `ReactNode`

---

`text`

The text of the button.

Type: `string`

---

`size`

Size for the button.

Type: `'small' | 'large'`

---

`color`

The color variant of the button.

Type: `'primary' | 'secondary' | 'danger' | 'info' | 'warning' | 'success'`

---

`roundedSide`

The side of the button to round.

Type: `'top' | 'bottom' | 'left' | 'right'`

---

`className`

Additional class names for extending styles.

Type: `string`

## CSS classes

`.button`

The base styles for the button

---

`.button--small`

Styles for small variant

---

`.button--large`

Styles for large variant

---

`.button--outline`

Styles for outline variant

---

`.button--text`

Styles for text variant

---

`.button--primary`

Styles for the primary variant

---

`.button--secondary`

Styles for the secondary variant

---

`.button--danger`

Styles for the danger variant
