---
to: packages/<%= name %>/README.md
---
<%
  ComponentName = h.changeCase.title(name)
  ComponentKebab = h.changeCase.param(name)
  PackageName = `@hdoc/react-${name}`
-%>
# <%= PackageName %>

<p align="center">
  <a href="https://www.npmjs.com/package/<%= PackageName %>">
    <img alt="npm" src="https://img.shields.io/npm/v/%40hdoc%2Freact-<%= name %>">
  </a>
  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/%40hdoc%2Freact-<%= name %>">
  <img alt="npm" src="https://img.shields.io/npm/dm/%40hdoc%2Freact-<%= name %>">
</p>

<%= description %>

## Installation

```bash
npm install <%= PackageName %> @hdoc/react-material-icons @material-design-icons/font
```

## Usage

Import `@material-design-icons/font` in your entry file (example: src/main.jsx in Vite):

```js
import "@material-design-icons/font";
```

Check [@material-design-icons/font docs](https://www.npmjs.com/package/@material-design-icons/font#usage) for more info.

Then, in your `App.jsx` or another file:

```jsx
import { <%= ComponentName %> } from "<%= PackageName %>";

function App() {
  return (
    <>
      ...
      <<%= ComponentName %> size="large" color="primary" />
    </>
  );
}
```

## Props

`startIcon`

The name of the icon to display on the left.

Type: `string`

---

`endIcon`

The name of the icon to display on the right.

Type: `string`

---

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

Type: `'small' | 'medium' | 'large'`

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
.any-parent-of-<%= ComponentKebab %>-component,
.class-that-i-use-for-extending-styles {
  --<%= ComponentKebab %>-color: black; /* default color */
  --<%= ComponentKebab %>-color-error: red;
  --<%= ComponentKebab %>-color-warning: orange;
  --<%= ComponentKebab %>-color-info: blue;
  --<%= ComponentKebab %>-color-success: green;
  --<%= ComponentKebab %>-color-disabled: gray;
}
```
