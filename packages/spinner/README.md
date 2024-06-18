# @hrc/spinner

<div align="center">

[![version](https://img.shields.io/npm/v/%40hrc%2Fspinner)](https://www.npmjs.com/package/@hrc/spinner)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/%40hrc%2Fspinner)
![npm downloads](https://img.shields.io/npm/dm/%40hrc%2Fspinner)

</div>

Simple spinner components for your React app

## Installation

```bash
npm install @hrc/spinner
```

## Usage

```js
import { DualRingSpinner, GrowingSpinner, RingSpinner } from "@hrc/spinner";

export function PackageDemo() {
  return (
    <>
      <RingSpinner size="large" color="primary" />
      <DualRingSpinner color="error" />
      <GrowingSpinner />
    </>
  );
}
```

## Documentation

- [Package documentation](https://hdoc1509.github.io/hrc/packages/spinner/)
