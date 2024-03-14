# @hrc/type-utils

Type utilities used by [component packages](https://github.com/Hdoc1509/hrc#packages)
of [@hrc/monorepo](https://github.com/Hdoc1509/hrc)

## Installation

```bash
npm install @hrc/type-utils
```

## Usage

```ts
import type { Simplify } from "@hrc/type-utils";

type MyType = {
  a: number;
  b: string;
};

type AnotherType = {
  c: boolean;
  d: number;
};

type FlattenedType = Simplify<MyType & AnotherType>;
```

## API

### Utilities

- [`Simplify`](./src/simplify.d.ts) - Use to flatten the type output to improve
  type hints shown in editors.

### Common Props

These are [`common props`](./src/common-props.d.ts) that can be used in any
component.

- `Color` - Color variants
- `Size` - Size variants
