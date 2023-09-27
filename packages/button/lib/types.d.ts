import { Icon } from "@hdoc/react-material-icons";
import type { ComponentProps } from "react";
import type { Simplify } from "type-fest";

type IconProps = ComponentProps<typeof Icon>;

export type ButtonProps = Simplify<
  {
    variant?: "outline" | "text";
    disableShadow?: boolean;
    iconStart?: IconProps["name"];
    iconEnd?: IconProps["name"];
    iconVariant?: IconProps["variant"];
    text?: string;
    size?: "small" | "large";
    color?: "primary" | "secondary" | "danger";
  } & ComponentProps<"button">
>;

export type ButtonIconProps = Simplify<
  {
    icon: IconProps["name"];
  } & Omit<ButtonProps, "iconStart" | "iconEnd" | "text">
>;
