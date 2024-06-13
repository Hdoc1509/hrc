---
"@hrc/button": major
---

Rename prop to disable shadow

#### Migrating

```diff
function App() {
  return (
    <>
-     <Button disableShadow>No shadow</Button>
+     <Button noShadow>No shadow</Button>
    </>
  );
}
```

#### Why

It was renamed to match its corresponding class: `.button--no-shadow`
