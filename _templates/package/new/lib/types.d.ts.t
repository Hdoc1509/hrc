---
to: packages/<%= name %>/lib/types.d.ts
---
<% ComponentName = h.changeCase.title(name) -%>
import type { ComponentProps } from "react";
import { Icon } from "@hdoc/react-material-icons";

type IconProps = ComponentProps<typeof Icon>;

export type <%= ComponentName %>Props = {
  size?: "small" | "medium" | "large";
  startIcon?: IconProps["name"];
  endIcon?: IconProps["name"];
  color?: "primary" | "secondary" | "error" | "warning" | "info" | "success";
  className?: string;
  disabled?: boolean;
};
