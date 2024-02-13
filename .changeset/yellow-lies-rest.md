---
"@hdoc/react-input": minor
---

Use independent classes for `<Input />` component

Migrating

- If you were using css selectors, you should rename them as follows:
  - `.input` to `.input-wrapper > input`
  - `.input-label` to `.label`
  - `.input-helper` to `.helper-text`
- The following css custom properties were removed:
  - `--label-text-hover`
- The following css custom properties were renamed:
  - `--input-helper-text` to `--helper-text-color`
