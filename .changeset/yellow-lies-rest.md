---
"@hdoc/react-input": minor
---

Use independent classes for `<Input />` component

`This release contains backwards-incompatible changes`. To avoid picking up
releases like this, you should set a exact version or use a version range syntax
that only accepts patch upgrades, i.e. `^0.5.0` or `~0.5.0`, in your
`package.json`

Migrating

- If you were using css selectors, you should rename them as follows:
  - `.input` to `.input-wrapper > input`
  - `.input-label` to `.label`
  - `.input-helper` to `.helper-text`
- The following css custom properties were removed:
  - `--label-text-hover`
- The following css custom properties were renamed:
  - `--input-helper-text` to `--helper-text-color`
