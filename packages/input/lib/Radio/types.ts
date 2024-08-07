import { Simplify } from "@hrc/type-utils";
import { CheckboxProps } from "../Checkbox/types";

export type RadioProps = Simplify<
  Omit<CheckboxProps, "label" | "icon" | "iconChecked" | "value"> & {
    value: string;
    label: string;
  }
>;
