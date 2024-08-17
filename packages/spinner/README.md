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
  BarsBounce2Spinner,
  BarsBounceSpinner,
  BarsWaveSpinner,
  BladeSpinner,
  BorderSpinner,
  ChaseSpinner,
  ChasingDotsSpinner,
  CircleSpinner,
  DoubleGrowingSpinner,
  DualCubeSpinner,
  DualRingSpinner,
  EllipsisSpinner,
  GrowingEllipsisSpinner,
  GrowingSpinner,
  HeartSpinner,
  RingSpinner,
  RippleSpinner,
  Roller2Spinner,
  RollerSpinner,
  RotatePlaneSpinner,
} from "@hrc/spinner";

export function PackageDemo() {
  return (
    <>
      <BarsBounceSpinner size="large" />
      <BarsBounce2Spinner color="primary" />
      <BarsWaveSpinner color="secondary" size="small" />
      <BladeSpinner color="error" speed="fast" />
      <BorderSpinner color="info" />
      <ChaseSpinner color="warning" speed="slow" />
      <ChasingDotsSpinner color="success" size="large" />
      <CircleSpinner />
      <DoubleGrowingSpinner color="primary" size="small" />
      <DualCubeSpinner color="secondary" speed="fast" />
      <DualRingSpinner color="error" />
      <EllipsisSpinner color="info" speed="slow" />
      <GrowingEllipsisSpinner color="warning" size="large" />
      <GrowingSpinner color="success" />
      <HeartSpinner size="small" />
      <RingSpinner color="primary" speed="fast" />
      <RippleSpinner color="secondary" />
      <RollerSpinner color="error" speed="slow" />
      <Roller2Spinner color="info" size="large" />
      <RotatePlaneSpinner color="warning" />
    </>
  );
}
```

## Documentation

- [Package documentation](https://hdoc1509.github.io/hrc/packages/spinner/)
