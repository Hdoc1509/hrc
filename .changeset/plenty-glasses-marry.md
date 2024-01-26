---
"@hdoc/react-button": major
---

Changed way of handling icons

- `<Button />` affected props:
  - `iconStart` -> type: `ReactNode`
  - `iconEnd` -> type: `ReactNode`
  - removed `iconVariant`
- `<ButtonIcon />` affected props:
  - accepts `children`
  - removed `icon`
  - removed `iconVariant`

#### Migrating

1. Change values of `iconStart` and `iconEnd` from `string` to `ReactNode`:
2. Remove every `iconVariant`
3. Remove `icon` from `<ButtonIcon />` and use `children`

```js
// BEFORE
function App() {
  return (
    <>
      <Button text="Search" iconStart="search" />
      <ButtonIcon icon="delete" />
    </>
  );
}

// NOW
import { SearchIcon, DeleteIcon } from "third-party-package";

function App() {
  return (
    <>
      <Button text="Search" iconStart={<SearchIcon />} />
      <ButtonIcon>
        <DeleteIcon />
      </ButtonIcon>
    </>
  );
}
```
