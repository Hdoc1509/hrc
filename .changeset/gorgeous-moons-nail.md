---
"@hdoc/react-material-icons": major
---

Rename css custom properties for color variants

#### Migrating

Remove `--icon-color-` prefix:

```css
/* BEFORE */
--icon-color-primary: lightblue;
--icon-color-secondary: #2c3e50;
--icon-color-error: red;
--icon-color-warning: orange;
--icon-color-info: blue;
--icon-color-success: green;

/* NOW */
--primary: lightblue;
--secondary: #2c3e50;
--error: red;
--warning: orange;
--info: blue;
--success: green;
```
