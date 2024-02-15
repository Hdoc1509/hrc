---
to: packages/<%= name %>/lib/main.ts
---
<% ComponentTitle = h.changeCase.title(name) -%>
import "./css/main.scss";
export { <%= ComponentTitle %> } from './<%= ComponentTitle %>';
