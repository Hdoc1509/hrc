---
to: packages/<%= name %>/src/App.css
---
<%
  ComponentKebab = h.changeCase.param(name)
  ComponentCamel = h.changeCase.camel(name)
-%>
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

[data-theme="light"] .<%= ComponentKebab %> {
  --color-primary: #0070f3;
  --color-secondary: #fafafa;
  --color-error: #ff3860;
  --color-disabled: #eaeaea;
}

[data-theme="dark"] .<%= ComponentKebab %> {
  --color-primary: #1a73e8;
  --color-secondary: #202124;
  --color-error: #d93025;
  --color-disabled: #5f6368;
}


.<%= ComponentKebab %>-container {
  --<%= ComponentKebab %>-color: blue;
}

.my-container-with-custom-color {
  --<%= ComponentKebab %>-color-error: salmon;
  --<%= ComponentKebab %>-color-disabled: gray;
}
