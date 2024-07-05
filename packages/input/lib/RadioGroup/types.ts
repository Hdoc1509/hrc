import { Simplify } from "@hrc/type-utils";
import { RadioProps } from "../Radio/types";

export type RadioGroupProps<T extends RadioOption, V extends string> = Simplify<
  {
    options?: readonly T[];
    name: string;
    value?: V;
    defaultValue?: T["value"];
    onChange?: (value: V) => void;
    row?: boolean;
  } & Pick<RadioProps, "color" | "form" | "size" | "disabled"> &
    Omit<React.ComponentProps<"div">, "onChange" | "defaultValue">
>;

export type RadioOption = { label: string; value: string };

export type RadioGroupOption<T> = T extends readonly RadioOption[]
  ? T[number]["value"]
  : T extends Record<string, string>
  ? T[keyof T]
  : never;
