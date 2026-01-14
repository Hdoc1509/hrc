---
title: ThemeButton API
description: API reference docs for the React ThemeButton component
---

## Import

```js
import { ThemeButton } from "@hrc/toggle-theme";
```

## Props

:::note
**All props are optional unless otherwise specified.**
:::

**`lightElement` (required)**

Element to render when the theme is `light`.

Type: `ReactNode`

---

**`darkElement` (required)**

Element to render when the theme is `dark`.

Type: `ReactNode`

---

**`fullRounded`**

Whether to make the button full rounded.

Type: `boolean`

## CSS Variables

You can customize the style of `<ThemeButton />` component by using the
following CSS variables (custom properties):

```css
.theme-button {
  --button-bg: #fff;
  --button-bg-hover: #eee;
  --button-bg-active: #ddd;
}

/* The same custom properties applies for dark theme. */
[data-theme="dark"] .theme-button {
  --button-bg: #333;
  --button-bg-hover: #444;
  --button-bg-active: #555;
}
```

## CSS Classes

**`theme-button`**

The base styles for `<ThemeButton />` component.

---

**`theme-button--full-rounded`**

Styles for the `full-rounded` variant.
