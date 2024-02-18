# @hdoc-react/type-utils

Type utilities for packages of @hdoc-react

## Installation

```bash
npm install @hdoc-react/type-utils
```

## Usage

```ts
import type { Simplify } from "@hdoc-react/type-utils";

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
