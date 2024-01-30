---
"@hdoc/react-button": major
---

Remove `text` prop and use `children` instead

- `<Button />` affected props:
  - removed `text`

#### Migrating

```js
// BEFORE
function App() {
  return (
    <>
      <Button text="Save" />
    </>
  );
}

// NOW
function App() {
  return (
    <>
      <Button>Save</Button>
    </>
  );
}
```

#### Why

The `text` prop has been removed from the `Button` component and replaced with
`children`. This makes the `Button` component similar to a normal HTML `button`
element.
