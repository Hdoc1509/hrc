# ButtonIcon API

## Import

```jsx
import { ButtonIcon } from "@hdoc/react-button";
```

## Props

**All props are optional unless otherwise specified.**

**Additionally, it can receive all attributes of a `button` element**

`children` **(required)**

Icon to display.

Type: `ReactNode`

---

`variant`

The variant of the button.

Type: `'outline' | 'text'`

---

`disableShadow`

Whether the shadow is disabled.

Type: `boolean`

---

`size`

Size for the button.

Type: `'small' | 'large'`

---

`color`

The color variant of the button.

Type: `'primary' | 'secondary' | 'error' | 'info' | 'warning' | 'success'`

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

`.button--icon`

Stylize the button to fit an icon

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

`.button--error`

Styles for the error variant
