---
to: packages/<%= name %>/lib/main.ts
---
<% ComponentTitle = h.changeCase.title(name) -%>
export { <%= ComponentTitle %> } from './<%= ComponentTitle %>';
