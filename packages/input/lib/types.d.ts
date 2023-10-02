import type { ComponentProps } from "react";
import type { Simplify } from "type-fest";
import { Icon } from "@hdoc/react-material-icons";

type IconProps = ComponentProps<typeof Icon>;

export type InputProps = Simplify<
  {
    label?: string;
    labelClassName?: string;
    error?: boolean;
    helperText?: string;
    fullWidth?: boolean;
    size?: "small";
    iconStart?: IconProps["name"];
    iconEnd?: IconProps["name"];
    iconVariant?: IconProps["variant"];
  } & Omit<ComponentProps<"input">, "size" | "color">
>;
