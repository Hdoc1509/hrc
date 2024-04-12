# @hrc/button

<p align="center">
  <a href="https://www.npmjs.com/package/@hrc/button">
    <img alt="npm" src="https://img.shields.io/npm/v/%40hrc%2Fbutton">
  </a>
  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/%40hrc%2Fbutton">
  <img alt="npm" src="https://img.shields.io/npm/dm/%40hrc%2Fbutton">
</p>

Simple button components for your React app

## Installation

```bash
npm install @hrc/button
```

## Usage

```js
import { DeleteIcon, FavoriteIcon, SearchIcon } from "third-party-package";
import { Button, ButtonIcon, ButtonGroup } from "@hrc/button";

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

## Documentation

- [Package Documentation](https://hdoc1509.github.io/hrc/packages/button/)
