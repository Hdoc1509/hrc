---
"@hdoc-react/input": minor
---

Rename class selector of input wrapper

#### Migrating

If you were using css selectors, you should rename them as follows:

- `.input-wapper` -> `.input`
- `.input-wrapper--error` -> `.input--error`
- `.input-wrapper--disabled` -> `.input--disabled`
- `.input-wrapper--small` -> `.input--small`
- `.input-wrapper--fullwidth` -> `.input--fullwidth`
- `.input-wrapper > input` -> `.input__inner`
