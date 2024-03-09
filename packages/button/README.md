# @hdoc-react/button

<p align="center">
  <a href="https://www.npmjs.com/package/@hdoc-react/button">
    <img alt="npm" src="https://img.shields.io/npm/v/%40hdoc-react%2Fbutton">
  </a>
  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/%40hdoc-react%2Fbutton">
  <img alt="npm" src="https://img.shields.io/npm/dm/%40hdoc-react%2Fbutton">
</p>

Simple button components for your React app

![Buttons screenshot](https://github.com/Hdoc1509/react-components/assets/72316111/f6ea1b00-a905-4bbf-97d8-81291b22303f)

> Demo generated with code from [Usage](#usage) section

## Installation

```bash
npm install @hdoc-react/button
```

## Usage

```js
import { DeleteIcon, FavoriteIcon, SearchIcon } from "third-party-package";
import { Button, ButtonIcon, ButtonGroup } from "@hdoc-react/button";

function App() {
  return (
    <>
      <Button size="large" color="primary" iconEnd={<DeleteIcon />}>
        Delete
      </Button>
      <ButtonIcon color="error">
        <FavoriteIcon />
      </ButtonIcon
      <ButtonGroup>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
        <ButtonIcon>
          <SearchIcon />
        </ButtonIcon>
      </ButtonGroup>
    </>
  );
}
```

## API

See documentation below for reference to all of the props, classes and CSS
variables (custom properties) available for the following components:

- [`<Button />`](docs/Button.md)
- [`<ButtonIcon />`](docs/ButtonIcon.md)
- [`<ButtonGroup />`](docs/ButtonGroup.md)
