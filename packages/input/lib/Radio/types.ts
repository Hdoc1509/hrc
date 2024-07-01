import { Simplify } from "@hrc/type-utils";
import { CheckboxProps } from "../Checkbox/types";

export type RadioProps = Simplify<
  Omit<CheckboxProps, "label" | "name" | "icon" | "iconChecked"> & {
    label: string;
    name: string;
  }
>;
