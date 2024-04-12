# @hrc/type-utils

Type utilities used by the following packages of [`<hrc
/>`](https://hdoc1509.github.io/hrc/):

- [`@hrc/button`](https://hdoc1509.github.io/hrc/packages/button)
- [`@hrc/input`](https://hdoc1509.github.io/hrc/packages/input)

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

## Documentation

- [Package Documentation](https://hdoc1509.github.io/hrc/packages/type-utils)
