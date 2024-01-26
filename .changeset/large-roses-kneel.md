---
"@hdoc/react-button": major
---

Rename color`danger` to `error`

#### Migrating

1. Rename `color` prop from `danger` to `error`

```js
function App() {
  return (
    <>
      {/* BEFORE */}
      <Button text="Delete" color="danger" />

      {/* NOW */}
      <Button text="Delete" color="error" />
    </>
  );
}
```

2. Rename css custom properties of `--danger` to `--error`

```css
.my-selector {
  /* before */
  --danger: red;
  --danger-hover: darkred;
  --danger-text: white;
  --danger-transparent: rgba(255, 0, 0, 0.5);

  /* now */
  --error: red;
  --error-hover: darkred;
  --error-text: white;
  --error-transparent: rgba(255, 0, 0, 0.5);
}
```
