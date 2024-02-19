---
to: packages/<%= name %>/lib/<%= h.changeCase.title(name) %>.tsx
---
<%
  ComponentName = h.changeCase.pascal(name)
  ComponentKebab = h.changeCase.param(name)
  ComponentCamel = h.changeCase.camel(name)
-%>
import { clsx } from "clsx";

export const <%= ComponentName %> = ({
  size,
  color,
  className,
  disabled,
}: <%= ComponentName %>Props): JSX.Element => {
  const <%= ComponentCamel %>Class = clsx(
    "<%= ComponentKebab %>",
    {
      [`<%= ComponentKebab %>--${size}`]: size,
      [`<%= ComponentKebab %>--${color}`]: color,
      ["<%= ComponentKebab %>--disabled"]: disabled,
    },
    className,
  );

  return (
    <div className={<%= ComponentCamel %>Class}>
      <%= ComponentName %>
    </div>
  );
};
