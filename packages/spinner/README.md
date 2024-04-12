# @hrc/spinner

<p align="center">
  <a href="https://www.npmjs.com/package/@hrc/spinner">
    <img alt="npm" src="https://img.shields.io/npm/v/%40hrc%2Fspinner">
  </a>
  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/%40hrc%2Fspinner">
  <img alt="npm" src="https://img.shields.io/npm/dm/%40hrc%2Fspinner">
</p>

## Installation

```bash
npm install @hrc/spinner
```

## Usage

```js
import { DualRingSpinner, GrowingSpinner, RingSpinner } from "@hrc/spinner";

function App() {
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
