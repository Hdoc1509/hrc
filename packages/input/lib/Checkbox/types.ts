import { Color, Simplify, Size } from "@hrc/type-utils";
import { InputProps } from "../Input/types";

export type CheckboxProps = Simplify<
  {
    icon?: React.ReactNode;
    iconChecked?: React.ReactNode;
    size?: Size;
    color?: Color;
  } & Pick<InputProps, "label" | "labelClassName"> &
    Omit<React.ComponentProps<"input">, "size" | "color" | "type">
>;
