# Button API

## Import

```js
import { Button } from "@hdoc-react/button";
```

## Default button

![button-default](https://github.com/Hdoc1509/react-components/assets/72316111/05034baf-ced2-4977-9135-5558380b2942)

<details>
  <summary>Show code</summary>

```js
import * as React from "react";
import { Button } from "@hdoc-react/button";

export default function ButtonDefault() {
  return (
    <>
      <Button />
      <Button variant="outline" />
      <Button variant="text" />
    </>
  );
}
```

</details>

## Colors

![button-colors](https://github.com/Hdoc1509/react-components/assets/72316111/83d7217f-fbd7-44ce-b8c8-fcfd5f462a1a)

<details>
  <summary>Show code</summary>

```js
import * as React from "react";
import { Button } from "@hdoc-react/button";

const colors = ["primary", "secondary", "error", "info", "warning", "success"];

export default function ButtonColors() {
  return (
    <>
      {colors.map((color) => (
        <>
          <Button key={`button-${color}-default`} color={color} />
          <Button
            key={`button-${color}-outline`}
            color={color}
            variant="outline"
          />
          <Button key={`button-${color}-text`} color={color} variant="text" />
        </>
      ))}
    </>
  );
}
```

</details>

## Sizes

![button-sizes](https://github.com/Hdoc1509/react-components/assets/72316111/670c036c-0b0d-4d3b-ba01-e9d6261aaf27)

<details>
  <summary>Show code</summary>

```js
import * as React from "react";
import { Button } from "@hdoc-react/button";

export default function ButtonSizes() {
  return (
    <>
      <Button color="primary" size="small">
        Small
      </Button>
      <Button color="primary" />
      <Button color="primary" size="large">
        Large
      </Button>
    </>
  );
}
```

</details>

## Rounded

![button-rounded](https://github.com/Hdoc1509/react-components/assets/72316111/3aed7537-c02f-4128-a870-4d3b6e2988a7)

<details>
  <summary>Show code</summary>

```js
import * as React from "react";
import { Button } from "@hdoc-react/button";

export default function ButtonRounded() {
  return (
    <>
      <Button color="secondary" roundedSide="top">
        Top rounded
      </Button>
      <Button color="secondary" roundedSide="bottom">
        Bottom rounded
      </Button>
      <Button color="secondary" roundedSide="left">
        Left rounded
      </Button>
      <Button color="secondary" roundedSide="right">
        Right rounded
      </Button>
      <Button color="secondary" fullRounded>
        Full rounded
      </Button>
    </>
  );
}
```

</details>

## Icons

![button-with-icons](https://github.com/Hdoc1509/react-components/assets/72316111/58ac1cb7-da86-4641-9839-9da923dfcca8)

<details>
  <summary>Show code</summary>

```js
import * as React from "react";
import { Button } from "@hdoc-react/button";
import { DeleteIcon, CloseIcon, FavoriteIcon } from "third-party-package";

export default function ButtonWithIcons() {
  return (
    <>
      <Button color="error" iconStart={<DeleteIcon />}>
        Delete
      </Button>
      <Button color="error" iconEnd={<DeleteIcon />}>
        Delete
      </Button>
      <Button color="error" variant="outline" iconStart={<CloseIcon />}>
        Close
      </Button>
      <Button color="error" variant="outline" iconEnd={<CloseIcon />}>
        Close
      </Button>
      <Button color="error" variant="outline" iconStart={<FavoriteIcon />}>
        Favorite
      </Button>
      <Button color="error" variant="outline" iconEnd={<FavoriteIcon />}>
        Favorite
      </Button>
    </>
  );
}
```

</details>

## Props

**All props are optional unless otherwise specified.**

**Additionally, it can receive all attributes of a `button` element.**

**`variant`**

The variant of the button.

Type: `'outline' | 'text'`

---

**`disableShadow`**

Whether the shadow is disabled.

Type: `boolean`

---

**`iconStart`**

Icon placed before the text

Type: `ReactNode`

---

**`iconEnd`**

Icon placed after the text

Type: `ReactNode`

---

**`size`**

Size for the button.

Type: `'small' | 'large'`

---

**`color`**

The color variant of the button.

Type: `'primary' | 'secondary' | 'error' | 'info' | 'warning' | 'success'`

---

**`roundedSide`**

The side of the button to round.

Type: `'top' | 'bottom' | 'left' | 'right'`

---

**`className`**

Additional class names for extending styles.

Type: `string`

## CSS Variables

You can customize the style of `<Button />` component by using the following CSS
variables (custom properties):

```css
.any-parent-of-button,
.class-to-extend-styles {
  /* NORMAL BUTTON */
  --button-justify-content: flex-start;
  --button-gap: 10px;

  --button-bg: lightgray;
  --button-bg-hover: darkgray;
  --button-bg-disabled: gray;

  --button-text: black;
  --button-text-disabled: gray;

  --button-font-family: "Arial";
  --button-font-size: 1rem;
  --button-font-weight: bold;

  --button-padding: 10px;
  --button-radius: 10px;
  --button-shadow: 0 0 0 1px black;

  /* COLOR VARIANTS: primary | secondary | error | info | warning | success */
  /* --[color]: <color> */
  /* background color - outline and text color when is `outline` variant */
  --primary: blue;

  /* --[color]-hover: <color> */
  /* background color on hover */
  --primary-hover: darkblue;

  /* --[color]-text: <color> */
  --primary-text: white;

  /* --[color]-transparent: <color> */
  /* background color on hover when is `outline` or `text` variant */
  --primary-transparent: rgba(0, 0, 255, 0.1);

  /* OUTLINE AND TEXT VARIANTS */
  --button-outline-color: white; /* outline and font color */
  --button-outline-bg-hover: black;
}
```

## CSS Classes

**`.button`**

The base styles for `<Button />` component

---

**`.button--primary`**

Styles for the `primary` color variant

---

**`.button--secondary`**

Styles for the `secondary` color variant

---

**`.button--error`**

Styles for the `error` color variant

---

**`.button--info`**

Styles for the `info` color variant

---

**`.button--warning`**

Styles for the `warning` color variant

---

**`.button--success`**

Styles for the `success` variant

---

**`.button--no-shadow`**

Styles for no shadow variant

---

**`.button--small`**

Styles for `small` size variant

---

**`.button--large`**

Styles for `large` size variant

---

**`.button--top-rounded`**

Styles for top-rounded variant

---

**`.button--bottom-rounded`**

Styles for bottom-rounded variant

---

**`.button--left-rounded`**

Styles for left-rounded variant

---

**`.button--right-rounded`**

Styles for right-rounded variant

---

**`.button--full-rounded`**

Styles for full-rounded variant

---

**`.button--outline`**

Styles for `outline` variant

---

**`.button--text`**

Styles for `text` variant
