---
to: packages/<%= name %>/README.md
---
<%
  ComponentName = h.changeCase.pascal(name)
  ComponentKebab = h.changeCase.param(name)
  PackageName = `@hrc/${name}`
-%>
# <%= PackageName %>

<p align="center">

[![version](https://img.shields.io/npm/v/%40hrc%2F<%= name %>)](https://www.npmjs.com/package/@hrc/<%= name %>)
![bundle size](https://img.shields.io/bundlephobia/minzip/%40hrc%2F<%= name %>)
![downloads](https://img.shields.io/npm/dm/%40hrc%2F<%= name %>)

</p>

<%= description %>

## Installation

```bash
npm install <%= PackageName %>
```

## Usage

```js
import { <%= ComponentName %> } from "<%= PackageName %>";

function App() {
  return (
    <>
      <<%= ComponentName %> size="large" color="primary" />
    </>
  );
}
```

## Props

`color`

The color of the <%= name %>.

Type: `'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'`

---

`className`

Additional class names for extending styles.

Type: `string`

---

`disabled`

Whether the <%= name %> is disabled.

Type: `boolean`

---

`size`

Size for the <%= name %>.

Type: `'small' | 'large'`

---

## CSS classes

`.<%= ComponentKebab %>--primary`

The primary styles for the <%= name %>

---

`.<%= ComponentKebab %>--secondary`

The secondary styles for the <%= name %>

---

`.<%= ComponentKebab %>--error`

The error styles for the <%= name %>

---

`.<%= ComponentKebab %>--warning`

The warning styles for the <%= name %>

---

`.<%= ComponentKebab %>--info`

The info styles for the <%= name %>

---

`.<%= ComponentKebab %>--success`

The success styles for the <%= name %>

---

`.<%= ComponentKebab %>--small`

The small styles for the <%= name %>

---

`.<%= ComponentKebab %>--medium`

The medium styles for the <%= name %>

---

`.<%= ComponentKebab %>--large`

The large styles for the <%= name %>

---

`.<%= ComponentKebab %>--disabled`

The disabled styles for the <%= name %>

## Customization

You can customize the color of the <%= name %> by using the following CSS custom properties:

```css
.any-parent-of-<%= ComponentKebab %>,
.class-that-extend-styles {
  --<%= ComponentKebab %>-size: 24px;

  --<%= ComponentKebab %>-color: black; /* default color */
  --<%= ComponentKebab %>-color-disabled: gray;

  /* COLOR VARIANTS */
  --primary: lightblue;
  --secondary: lightgray;
  --error: red;
  --warning: orange;
  --info: skyblue;
  --success: green;
}
```
