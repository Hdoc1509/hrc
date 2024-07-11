---
title: SpinnerBase (internal) API
description: API reference docs for the internal React SpinnerBase component
---

:::note
This component is not meant to be used directly. It is used by other spinner
components of [`@hrc/spinner`](/hrc/packages/spinner).
:::

## Props

**All props are optional unless otherwise specified.**

**`color`**

The color variant of the spinner.

Type: `'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'`

---

**`size`**

The size variant of the spinner.

Type: `'small' | 'large'`

---

**`speed`**

The speed variant of the spinner.

Type: `'slow' | 'fast'`

---

**`className`**

Additional class names for extending styles.

Type: `string`

## CSS Variables

You can customize the styles fo any spinner component by using the following CSS
variables (custom properties):

```css
.any-parent-of-spinner,
.class-to-extend-styles {
  --spinner-size: 24px;
  --spinner-color: black; /* default color */
  --spinner-animation-duration: 1s;

  /* COLOR VARIANTS */
  --primary: lightblue;
  --secondary: lightgray;
  --error: red;
  --warning: orange;
  --info: skyblue;
  --success: green;
}
```

## CSS Classes

**`.spinner`**

The `base styles` for the spinner.

---

**`.spinner--primary`**

Styles for the `primary` color variant.

---

**`.spinner--secondary`**

Styles for the `secondary` color variant.

---

**`.spinner--error`**

Styles for the `error` color variant.

---

**`.spinner--warning`**

Styles for the `warning` color variant.

---

**`.spinner--info`**

Styles fot the `info` color variant.

---

**`.spinner--success`**

Styles for the `success` color variant.

---

**`.spinner--small`**

Styles for the `small` size variant.

---

**`.spinner--large`**

Styles for the `large` size variant.

---

**`.spinner--slow`**

Styles for the `slow` speed variant.

---

**`.spinner--fast`**

Styles for the `fast` speed variant.

## Default values

### Speed

#### Normal

**Value:** `1.2s`

---

#### Slow

**Value:** `1.5s`

---

#### Fast

**Value:** `0.9s`
