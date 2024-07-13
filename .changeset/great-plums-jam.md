---
"@hrc/input": minor
---

Rename css variablest to set checked colors of `<Checkbox />` and `<Radio />`.

#### Migrating

```diff
.my-checkbox {
- --checkbox-checked-color: var(--color-primary);
+ --checkbox-color-checked: var(--color-primary);
}

.my-radio {
- --radio-checked-color: var(--color-primary);
+ --radio-color-checked: var(--color-primary);
}
```

#### Why?

It's more consistent to use the same prefix for set colors.
