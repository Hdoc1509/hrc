---
title: ButtonGroup API
description: API reference docs for the React ButtonGroup component
---

## Import

```js
import { ButtonGroup } from "@hrc/button";
```

## Props

**All props are optional unless otherwise specified.**

**Additionally, it can receive all attributes/props of a `div` element.**

**`children`**

The children of the button group. These should be `<Button />` or `<ButtonIcon />`.

Type: `ReactNode`

---

**`disableShadow`**

Whether the shadow is disabled.

Type: `boolean`

---

**`size`**

Size for the buttons in the group.

Type: `'small' | 'large'`

---

**`color`**

The color variant of the buttons in the group.

Type: `'primary' | 'secondary' | 'error' | 'info' | 'warning' | 'success'`

---

**`variant`**

The variant of the buttons in the group.

Type: `'outline' | 'text'`

---

**`disabled`**

Whether the buttons in the group are disabled.

Type: `boolean`

---

**`column`**

Whether the buttons in the group are in a column direction.

Type: `boolean`

## CSS Variables

You can customize the style of `<ButtonGroup />` component by using the
following CSS variables (custom properties):

```css
.any-parent-of-group,
.class-to-extend-styles {
  /* PROPERTIES FOR THE GROUP */
  --button-radius: 10px;
  --button-shadow: 0 0 0 1px black;
  --button-divider-color: gray;

  /* PROPERTIES FOR THE BUTTONS */
  --button-bg: lightgray;
  --button-bg-hover: darkgray;
  --button-text: black;
}
```

**Additionally, it can use the same [CSS Variables of `<Button
/>`](../button#css-variables) to customize the styles of the buttons.**

## CSS Classes

**`.button-group`**

The base styles for `<ButtonGroup />` component.

---

**`.button-group--small`**

Styles for small variant.

---

**`.button-group--large`**

Styles for large variant.

---

**`.button-group--column`**

Styles for column direction.

---

**Additionally, is uses the following [CSS Classes of `<Button
/>`](../button#css-classes) to set the styles of the group:**

- **`.button--no-shadow`**
- **`.button--disabled`**

---

**Additionally, it uses the following [CSS Classes of `<Button
/>`](../button#css-classes) to set the styles of the buttons:**

- **`.button--outline`**
- **`.button--text`**
- **`.button--primary`**
- **`.button--secondary`**
- **`.button--error`**
- **`.button--info`**
- **`.button--warning`**
- **`.button--success`**
