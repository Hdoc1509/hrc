---
"@hdoc/react-input": minor
---

Changed way of handling icons

**This release contains backwards-incompatible changes**. To avoid picking up
releases like this, you should set a exact version or use a version range syntax
that only accepts patch upgrades, i.e. `^0.3.0` or `~0.3.0`, in your `package.json`

- `<Input />` affected props:
  - `iconStart` -> type: `ReactNode`
  - `iconEnd` -> type: `ReactNode`
  - removed `iconVariant`

#### Migrating

1. Change values of `iconStart` and `iconEnd` from `string` to `ReactNode`.
2. Remove every `iconVariant`

```js
// BEFORE
function App() {
  return (
    <>
      <Input placeholder="Password" iconStart="lock" />
    </>
  );
}

// NOW
import { LockIcon } from `third-party-package`;

function App() {
  return (
    <>
      <Input placeholder="Password" iconStart={<LockIcon />} />
    </>
  );
}
```
