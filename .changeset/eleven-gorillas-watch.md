---
"@hrc/button": major
---

Rename css variable to set `justify-content`

Migrating

```diff
.my-selector {
- --button-justify-content: flex-start;
+ --button-justify: flex-start;
}
```
