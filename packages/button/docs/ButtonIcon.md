# ButtonIcon API

## Import

```js
import { ButtonIcon } from "@hdoc-react/button";
```

## Default button

![button-icon-default](https://github.com/Hdoc1509/react-components/assets/72316111/6a22efd6-dd76-4ea1-8499-96e8ee3a2812)

<details>
  <summary>Show code</summary>

```js
<>
  <ButtonIcon>
    <PeopleIcon />
  </ButtonIcon>
  <ButtonIcon variant="outline">
    <PeopleIcon />
  </ButtonIcon>
  <Button variant="text">
    <PeopleIcon />
  </Button>
</>
```

</details>

## Colors

![button-icon-colors](https://github.com/Hdoc1509/react-components/assets/72316111/cae50229-b05d-4e42-9e97-8c9f54cf1491)

<details>
  <summary>Show code</summary>

```js
<>
  <ButtonIcon color="primary">
    <SearchIcon />
  </ButtonIcon>
  <ButtonIcon color="primary" variant="outline">
    <SearchIcon />
  </ButtonIcon>
  <ButtonIcon color="primary" variant="text">
    <SearchIcon />
  </ButtonIcon>

  <ButtonIcon color="secondary">
    <SettingsIcon />
  </ButtonIcon>
  <ButtonIcon color="secondary" variant="outline">
    <SettingsIcon />
  </ButtonIcon>
  <ButtonIcon color="secondary" variant="text">
    <SettingsIcon />
  </ButtonIcon>

  <ButtonIcon color="error">
    <DeleteIcon />
  </ButtonIcon>
  <ButtonIcon color="error" variant="outline">
    <DeleteIcon />
  </ButtonIcon>
  <ButtonIcon color="error" variant="text">
    <DeleteIcon />
  </ButtonIcon>

  <ButtonIcon color="info">
    <MapIcon />
  </ButtonIcon>
  <ButtonIcon color="info" variant="outline">
    <MapIcon />
  </ButtonIcon>
  <ButtonIcon color="info" variant="text">
    <MapIcon />
  </ButtonIcon>

  <ButtonIcon color="warning">
    <WarningIcon />
  </ButtonIcon>
  <ButtonIcon color="warning" variant="outline">
    <WarningIcon />
  </ButtonIcon>
  <ButtonIcon color="warning" variant="text">
    <WarningIcon />
  </ButtonIcon>

  <ButtonIcon color="success">
    <CheckIcon />
  </ButtonIcon>
  <ButtonIcon color="success" variant="outline">
    <CheckIcon />
  </ButtonIcon>
  <ButtonIcon color="success" variant="text">
    <CheckIcon />
  </ButtonIcon>
</>
```

</details>

## Sizes

![button-icons-sizes](https://github.com/Hdoc1509/react-components/assets/72316111/7e100070-1078-45aa-a04e-cafe5910533a)

<details>
  <summary>Show code</summary>

```js
<>
  <ButtonIcon color="info" size="small">
    <AirIcon />
  </ButtonIcon>
  <ButtonIcon color="info">
    <AirIcon />
  </ButtonIcon>
  <ButtonIcon color="info" size="large">
    <AirIcon />
  </ButtonIcon>
</>
```

</details>

## Rounded

![button-icon-rounded](https://github.com/Hdoc1509/react-components/assets/72316111/f1456c62-71fd-49d9-ae3f-ebaa7a07fa46)

<details>
  <summary>Show code</summary>

```js
<>
  <ButtonIcon color="success" roundedSide="top">
    <AndroidIcon />
  </ButtonIcon>
  <ButtonIcon color="success" roundedSide="bottom">
    <AndroidIcon />
  </ButtonIcon>
  <ButtonIcon color="success" roundedSide="left">
    <AndroidIcon />
  </ButtonIcon>
  <ButtonIcon color="success" roundedSide="right">
    <AndroidIcon />
  </ButtonIcon>
  <ButtonIcon color="success" fullRounded>
    <AndroidIcon />
  </ButtonIcon>
</>
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

**It uses the same [CSS Classes of `<Button/>`](./Button.md#css-classes)**

**`button--icon`**

Stylize the button to fit an icon.
