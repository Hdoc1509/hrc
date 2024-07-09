import type { Simplify } from "@hrc/type-utils";
import type { ButtonProps } from "../Button/types";

export type ButtonGroupProps = Simplify<
  Pick<ButtonProps, "noShadow" | "size" | "color" | "variant" | "disabled"> & {
    column?: boolean;
  } & React.ComponentProps<"div">
>;
