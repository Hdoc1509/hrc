---
"@hrc/input": minor
---

Rename classname for error state of `<Textarea />`.

#### Migrating

- `.textarea--error` -> `.textarea--with-error`

#### Why?

This change will avoid conflicts with the future `.textarea--error` class that
will be used in color variants.
