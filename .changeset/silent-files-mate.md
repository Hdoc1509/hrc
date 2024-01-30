---
"@hdoc/react-button": major
---

Rename css custom property for change text color

#### Migrating

Rename css custom property from `--button-color` to `--button-text`:

```css
.my-selector {
  /* BEFORE */
  --button-color: gray;

  /* NOW */
  --button-text: gray;
}
```
