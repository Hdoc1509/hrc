import type { ComponentProps } from "react";
import { Icon } from "@hdoc/react-material-icons";

type IconProps = ComponentProps<typeof Icon>;

export type ButtonProps = {
  variant?: "outline" | "text";
  disableShadow?: boolean;
  disabled?: boolean;
  startIcon?: IconProps["name"];
  endIcon?: IconProps["name"];
  iconStyle?: IconProps["variant"];
  text?: string;
  size?: "small" | "medium" | "large";
  color?: "default" | "primary" | "secondary" | "danger";
  // color?: "primary" | "secondary" | "error" | "warning" | "info" | "success";
  className?: string;

};
