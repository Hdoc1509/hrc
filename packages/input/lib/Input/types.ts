import { Simplify } from "@hrc/type-utils";

export type InputProps = Simplify<
  Partial<{
    label: string;
    labelClassName: string;
    error: boolean;
    helperText: string;
    fullWidth: boolean;
    size: "small";
    iconStart: React.ReactNode;
    iconEnd: React.ReactNode;
  }> &
    Omit<React.ComponentProps<"input">, "size" | "color">
>;
