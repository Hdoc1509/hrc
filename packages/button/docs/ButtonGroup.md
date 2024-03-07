# ButtonGroup API

## Import

```js
import { ButtonGroup } from "@hdoc-react/button";
```

## Props

**All props are optional unless otherwise specified.**

**Additionally, it can receive all attributes of a `div` element.**

`children`

The children of the button group. These should be `<Button />` or `<ButtonIcon />`.

Type: `ReactNode`

---

`disableShadow`

Whether the shadow is disabled.

Type: `boolean`

---

`size`

Size for the buttons in the group.

Type: `'small' | 'large'`

---

`color`

The color variant of the buttons in the group.

Type: `'primary' | 'secondary' | 'error' | 'info' | 'warning' | 'success'`

---

`variant`

The variant of the buttons in the group.

Type: `'outline' | 'text'`

---

`disabled`

Whether the buttons in the group has disabled variant. This not disable the
buttons in the group.

Type: `boolean`

---

`direction`

The direction of the buttons in the group.

Type: `'column'`

## CSS Custom Properties

It can use the same properties as the `<Button />` component.

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

## CSS Classes

`.button-group`

The base styles for the button group

---

`.button-group--small`

Styles for small variant

---

`.button-group--large`

Styles for large variant

---

`.button-group--column`

Styles for column direction

---

The button group uses the same CSS classes as the `<Button />` component for
setting the buttons styles:

- `.button--outline`
- `.button--text`
- `.button--no-shadow`
- `.button--primary`
- `.button--secondary`
- `.button--error`
- `.button--info`
- `.button--warning`
- `.button--success`
- `.button--disabled`
