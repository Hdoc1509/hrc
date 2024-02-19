---
to: packages/<%= name %>/lib/main.ts
---
<% ComponentName = h.changeCase.pascal(name) -%>
import "./css/main.scss";
export { <%= ComponentName %> } from './<%= ComponentName %>';
