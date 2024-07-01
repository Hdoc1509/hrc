import { Simplify } from "@hrc/type-utils";
import { RadioProps } from "../Radio/types";

export type RadioGroupProps = Simplify<
  {
    options: RadioOption[];
    name: string;
    value?: string;
    onChange?: (value: string) => void;
    row?: boolean;
  } & Pick<RadioProps, "color" | "form" | "defaultValue"> &
    Omit<React.ComponentProps<"div">, "onChange" | "defaultValue">
>;

export type RadioOption = { label: string; value: string };
