import type { ComponentProps } from "react";
import type { Simplify } from "type-fest";
import { Icon } from "@hdoc/react-material-icons";

type IconProps = ComponentProps<typeof Icon>;

type SharedProps = Partial<{
  label: string;
  labelClassName: string;
  error: boolean;
  helperText: string;
  fullWidth: boolean;
  size: "small";
  iconStart: IconProps["name"];
  iconEnd: IconProps["name"];
  iconVariant: IconProps["variant"];
}>;

export type InputProps = Simplify<
  SharedProps & Omit<ComponentProps<"input">, "size" | "color">
>;

export type TextareaProps = Simplify<
  Omit<SharedProps, "iconStart" | "iconEnd" | "iconVariant" | "size"> &
    Omit<ComponentProps<"textarea">, "color" | "cols">
>;
