---
"@hrc/input": minor
---

Renamed classname for error state of `<Input />`.

#### Migrating

- `.input--error` -> `.input--with-error`

#### Why?

This change will avoid conflicts with the future `.input-error` class that will
be used in color variants.
