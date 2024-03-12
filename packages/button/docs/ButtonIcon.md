# ButtonIcon API

## Import

```js
import { ButtonIcon } from "@hdoc-react/button";
```

## Default button

![button-icon-default](https://github.com/Hdoc1509/react-components/assets/72316111/b899316a-f201-43b6-b59e-1847aaa9c8a5)

<details>
  <summary>Show code</summary>

```js
import * as React from "react";
import { ButtonIcon } from "@hdoc-react/button";
import { Icon } from "@hdoc-react/material-icons";

export default function ButtonIconDefault() {
  return (
    <>
      <ButtonIcon>
        <Icon name="people" />
      </ButtonIcon>
      <ButtonIcon variant="outline">
        <Icon name="people" />
      </ButtonIcon>
      <ButtonIcon variant="text">
        <Icon name="people" />
      </ButtonIcon>
      <ButtonIcon disabled>
        <Icon name="people" />
      </ButtonIcon>
    </>
  );
}
```

</details>

## Colors

![button-icon-colors](https://github.com/Hdoc1509/react-components/assets/72316111/cae50229-b05d-4e42-9e97-8c9f54cf1491)

<details>
  <summary>Show code</summary>

```js
import * as React from "react";
import { ButtonIcon } from "@hdoc-react/button";
import { Icon } from "@hdoc-react/material-icons";

const Icons = {
  primary: <Icon name="search" />,
  secondary: <Icon name="settings" />,
  error: <Icon name="delete" />,
  info: <Icon name="map" />,
  warning: <Icon name="warning" />,
  success: <Icon name="check" />,
};

return (
  <>
    {Object.keys(Icons).map((color) => (
      <>
        <ButtonIcon key={`button-icon-${color}-default`} color={color}>
          {Icons[color]}
        </ButtonIcon>
        <ButtonIcon
          key={`button-icon-${color}-outline`}
          color={color}
          variant="outline"
        >
          {Icons[color]}
        </ButtonIcon>
        <ButtonIcon
          key={`button-icon-${color}-text`}
          color={color}
          variant="text"
        >
          {Icons[color]}
        </ButtonIcon>
      </>
    ))}
  </>
);
```

</details>

## Sizes

![button-icons-sizes](https://github.com/Hdoc1509/react-components/assets/72316111/7e100070-1078-45aa-a04e-cafe5910533a)

<details>
  <summary>Show code</summary>

```js
import * as React from "react";
import { ButtonIcon } from "@hdoc-react/button";
import { Icon } from "@hdoc-react/material-icons";

export default function ButtonIconSizes() {
  return (
    <>
      <ButtonIcon color="info" size="small">
        <Icon name="air" />
      </ButtonIcon>
      <ButtonIcon color="info">
        <Icon name="air" />
      </ButtonIcon>
      <ButtonIcon color="info" size="large">
        <Icon name="air" />
      </ButtonIcon>
    </>
  );
}
```

</details>

## Rounded

![button-icon-rounded](https://github.com/Hdoc1509/react-components/assets/72316111/f1456c62-71fd-49d9-ae3f-ebaa7a07fa46)

<details>
  <summary>Show code</summary>

```js
import * as React from "react";
import { ButtonIcon } from "@hdoc-react/button";
import { Icon } from "@hdoc-react/material-icons";

export default function ButtonIconRounded() {
  return (
    <>
      <ButtonIcon color="success" roundedSide="top">
        <Icon name="adb" />
      </ButtonIcon>
      <ButtonIcon color="success" roundedSide="bottom">
        <Icon name="adb" />
      </ButtonIcon>
      <ButtonIcon color="success" roundedSide="left">
        <Icon name="adb" />
      </ButtonIcon>
      <ButtonIcon color="success" roundedSide="right">
        <Icon name="adb" />
      </ButtonIcon>
      <ButtonIcon color="success" fullRounded>
        <Icon name="adb" />
      </ButtonIcon>
    </>
  );
}
```

</details>

## Props

**It receives the same [props of `<Button />`](./Button.md#props)
component except `iconStart` and `iconEnd`.**

**Additionally, it can receive all attributes of a `button` element**

**`children` (required)**

Icon to display.

Type: `ReactNode`

## CSS Variables

**It uses the same [CSS Variables of `<Button/>`](./Button.md#css-variables)**

## CSS Classes

**`button--icon`**

Stylize the button to fit an icon.

---

Additionally, the `<ButtonIcon />` component uses the same [CSS Classes of `<Button/>`](./Button.md#css-classes)
