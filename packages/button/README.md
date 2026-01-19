# @hrc/button

<!-- markdownlint-disable MD033 -->
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
import { Button, ButtonIcon, ButtonGroup } from "@hrc/button";
import { Icon } from "@hrc/material-icons";

export function PackageDemo() {
  return (
    <>
      <Button size="large" color="primary" iconEnd={<Icon name="delete" />}>
        Delete
      </Button>
      <ButtonIcon color="error">
        <Icon name="favorite" />
      </ButtonIcon>
      <ButtonGroup>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
        <ButtonIcon>
          <Icon name="search" />
        </ButtonIcon>
      </ButtonGroup>
    </>
  );
}
```

## Documentation

- [Package Documentation](https://hdoc1509.github.io/hrc/packages/button/)
