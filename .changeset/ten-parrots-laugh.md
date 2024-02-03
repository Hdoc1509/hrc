---
"@hdoc/react-input": minor
---

Use independent classes for `<Textarea />` component

Migrating

- If you were using css selectors, you should rename them as follows:
  - `.input--textarea` -> `.textarea`
  - `.input-wrapper--error` -> `.textarea--error`
  - `.input-wrapper--fullwidth` -> `.textarea--fullwidth`
- The following selectors were removed:
  - `.input--textarea`
  - `.input-wrapper--textarea`
  - `.input-wrapper--textarea--error`
  - `.input-wrapper--textarea--fullwidth`
- The following css custom properties were added:
  - `--textarea-bg`
  - `--textarea-bg-disabled`
  - `--textarea-radius`
  - `--textarea-padding`
  - `--textarea-border-color`
  - `--textarea-border-color-hover`
  - `--textarea-border-color-focus`
  - `--textarea-border-color-disabled`
  - `--textarea-font-size`
  - `--textarea-font-weight`
  - `--textarea-text`
