# ButtonGroup API

## Import

```js
import { ButtonGroup } from "@hdoc-react/button";
```

## Default button group

![button-group-default](https://github.com/Hdoc1509/react-components/assets/72316111/9fdedccb-66f7-43b4-8647-da699ee14f8e)

<details>
  <summary>Show code</summary>

```js
import * as React from "react";
import { Button, ButtonGroup } from "@hdoc-react/button";

export default function ButtonGroupDefault() {
  return (
    <>
      <ButtonGroup>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <ButtonGroup variant="outline">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <ButtonGroup variant="text">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </>
  );
}
```

</details>

## Colors

![button-group-colors](https://github.com/Hdoc1509/react-components/assets/72316111/325879a8-f684-4198-89a5-22422b59bd79)

<details>
  <summary>Show code</summary>

```js
import * as React from "react";
import { Button, ButtonGroup } from "@hdoc-react/button";

const colors = ["primary", "secondary", "error", "info", "warning", "success"];

export default function ButtonGroupColors() {
  return (
    <>
      {colors.map((color) => (
        <>
          <ButtonGroup key={`button-group-${color}-default`} color={color}>
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
          <ButtonGroup
            key={`button-group-${color}-outline`}
            color={color}
            variant="outline"
          >
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
          <ButtonGroup
            key={`button-group-${color}-text`}
            color={color}
            variant="text"
          >
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </>
      ))}
    </>
  );
}
```

</details>

## Sizes

![button-group-sizes](https://github.com/Hdoc1509/react-components/assets/72316111/7d5d02b9-b10a-49df-aa27-983f53c8627e)

<details>
  <summary>Show code</summary>

```js
import * as React from "react";
import { Button, ButtonGroup } from "@hdoc-react/button";

export default function ButtonGroupSizes() {
  return (
    <>
      <ButtonGroup size="small" color="primary">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup color="primary">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup size="large" color="primary">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </>
  );
}
```

</details>

## Column

![button-group-column](https://github.com/Hdoc1509/react-components/assets/72316111/cdca20d0-77b7-4e1e-bafe-fbd4f7e0ec24)

<details>
  <summary>Show code</summary>

```js
import * as React from "react";
import { Button, ButtonGroup } from "@hdoc-react/button";

export default function ButtonGroupColors() {
  return (
    <>
      {["secondary", "error"].map((color) => (
        <>
          <ButtonGroup
            key={`button-group-column-${color}-default`}
            color={color}
            direction="column"
          >
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
          <ButtonGroup
            key={`button-group-column-${color}-outline`}
            color={color}
            variant="outline"
            direction="column"
          >
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
          <ButtonGroup
            key={`button-group-column-${color}-text`}
            color={color}
            variant="text"
            direction="column"
          >
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </>
      ))}
    </>
  );
}
```

</details>

## With icons

![button-group-with-icons](https://github.com/Hdoc1509/react-components/assets/72316111/e827f84e-58af-4350-92c7-62772d3b92cc)

<details>
  <summary>Show code</summary>

```js
import * as React from "react";
import { Button, ButtonIcon, ButtonGroup } from "@hdoc-react/button";

const Group = () => {
  return (
    <>
      <ButtonIcon>
        <AddIcon />
      </ButtonIcon>
      <ButtonIcon>
        <RemoveIcon />
      </ButtonIcon>
      <ButtonIcon>
        <DivideIcon />
      </ButtonIcon>
      <Button>Clear</Button>
    </>
  );
};

export default function ButtonGroupWithIcons() {
  return (
    <>
      <ButtonGroup color="success">
        <Group />
      </ButtonGroup>
      <ButtonGroup color="success" variant="outline">
        <Group />
      </ButtonGroup>
      <ButtonGroup color="success" variant="text">
        <Group />
      </ButtonGroup>
    </>
  );
}
```

</details>

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

Whether the buttons in the group are disabled.
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
