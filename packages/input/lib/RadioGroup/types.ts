import { Simplify } from "@hrc/type-utils";
import { RadioProps } from "../Radio/types";

export type RadioGroupProps = Simplify<
  {
    options: RadioOption[];
    value?: string;
    onChange?: (value: string) => void;
    row?: boolean;
  } & Pick<RadioProps, "color" | "form" | "name" | "defaultValue"> &
    Omit<React.ComponentProps<"div">, "onChange" | "defaultValue">
>;

export type RadioOption = { label: string; value: string };
