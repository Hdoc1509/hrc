---
"@hrc/button": major
---

Remove default text for `<Button />`

Migrating

```diff
- <Button color="primary">
+ <Button color="primary">Default</Button>
```

Why?

This change makes `<Button />` to be used as a regular HTML `button` element.
