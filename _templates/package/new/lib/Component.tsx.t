---
to: packages/<%= name %>/lib/<%= h.changeCase.title(name) %>.tsx
---
<%
  ComponentName = h.changeCase.title(name)
  ComponentKebab = h.changeCase.param(name)
  ComponentCamel = h.changeCase.camel(name)
-%>
import { clsx } from "clsx";
import { Icon } from "@hdoc/react-material-icons";
import type { <%= ComponentName %>Props } from "./types";
import "./css/styles.scss";

export const <%= ComponentName %> = ({
  size = "medium",
  startIcon,
  endIcon,
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
    <span className={<%= ComponentCamel %>Class}>
      {startIcon && (
        <Icon name={startIcon} className="input-icon input-icon--start" />
      )}
      <%= ComponentName %>
      {endIcon && (
        <Icon name={endIcon} className="input-icon input-icon--end" />
      )}
    </span>
  );
};
