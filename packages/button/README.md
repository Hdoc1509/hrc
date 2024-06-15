# @hrc/button

<div align="center">

[![version](https://img.shields.io/npm/v/%40hrc%2Fbutton)](https://www.npmjs.com/package/@hrc/button)
![bundle size](https://img.shields.io/bundlephobia/minzip/%40hrc%2Fbutton)
![downloads](https://img.shields.io/npm/dm/%40hrc%2Fbutton)

</div>

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
