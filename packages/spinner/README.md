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
import {
  BarsBounceSpinner,
  BladeSpinner,
  ChaseSpinner,
  CubeGridSpinner,
  DualCubeSpinner,
  GrowingEllipsisSpinner,
  RippleSpinner,
} from "@hrc/spinner";

export function PackageDemo() {
  return (
    <>
      <BarsBounceSpinner size="large" />
      <BladeSpinner color="primary" />
      <ChaseSpinner color="secondary" size="small" />
      <CubeGridSpinner color="error" speed="fast" />
      <DualCubeSpinner color="info" />
      <GrowingEllipsisSpinner color="warning" speed="slow" />
      <RippleSpinner color="success" size="large" />
    </>
  );
}
```

## Documentation

- [Package documentation](https://hdoc1509.github.io/hrc/packages/spinner/)
