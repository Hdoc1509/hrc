import { Simplify } from "@hrc/type-utils";
import { InputProps } from "../Input/types";

export type TextareaProps = Simplify<
  {
    autosize?: boolean;
  } & Pick<
    InputProps,
    "label" | "labelClassName" | "error" | "helperText" | "fullWidth" | "color"
  > &
    Omit<React.ComponentProps<"textarea">, "size" | "color">
>;
