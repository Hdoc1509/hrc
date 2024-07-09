import type { Simplify, Size, Color } from "@hrc/type-utils";

export type ButtonProps = Simplify<
  {
    variant?: "outline" | "text";
    noShadow?: boolean;
    iconStart?: React.ReactNode;
    iconEnd?: React.ReactNode;
    size?: Size;
    color?: Color;
    rounded?: "top" | "bottom" | "left" | "right" | "full" | "none";
  } & React.ComponentProps<"button">
>;
