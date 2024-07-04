import { createContext } from "react";
import { RadioGroupProps, RadioOption } from "./types";

export type RadioGroupContextValue = Pick<
  RadioGroupProps<RadioOption>,
  "form" | "name" | "value" | "defaultValue" | "onChange" | "color" | "size"
>;

export const RadioGroupContext = createContext<RadioGroupContextValue | null>(
  null,
);
