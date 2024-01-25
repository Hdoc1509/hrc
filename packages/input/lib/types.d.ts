import type { ComponentProps, ReactNode } from "react";
import type { Simplify } from "type-fest";

type SharedProps = Partial<{
  label: string;
  labelClassName: string;
  error: boolean;
  helperText: string;
  fullWidth: boolean;
  size: "small";
  iconStart: ReactNode;
  iconEnd: ReactNode;
}>;

export type InputProps = Simplify<
  SharedProps & Omit<ComponentProps<"input">, "size" | "color">
>;

export type TextareaProps = Simplify<
  Omit<SharedProps, "size"> & Omit<ComponentProps<"textarea">, "color" | "cols">
>;
