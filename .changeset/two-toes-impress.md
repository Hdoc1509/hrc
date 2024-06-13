---
"@hrc/button": major
---

Change way of handling rounded variants

- removed `roundedSide` and `fullRounded` prop from `<Button />` and `<ButtonIcon />`
- added `rounded` prop

#### Migrating

1. Remove `roundedSide` and `fullRounded` props from `<Button />` and `<ButtonIcon />`
2. Use `rounded` prop instead

```diff
function App() {
  return (
    <>
-     <Button roundedSize="left">Left</Button>
-     <Button roundedSize="top">Top</Button>
-     <Button fullRounded>Full</Button>
+     <BUtton rounded="left">Left</Button>
+     <Button rounded="top">Top</Button>
+     <Button rounded="full">Full</Button>
    </>
  );
}
```
