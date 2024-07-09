import { createContext, useContext } from "react";
import { RadioGroupProps, RadioOption } from "./types";

type RadioGroupContextValue = Pick<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  RadioGroupProps<RadioOption, any>,
  | "form"
  | "name"
  | "value"
  | "defaultValue"
  | "onChange"
  | "color"
  | "size"
  | "disabled"
>;

export const RadioGroupContext = createContext<RadioGroupContextValue | null>(
  null,
);

export const useRadioGroupContext = (): RadioGroupContextValue | null => {
  return useContext(RadioGroupContext);
};
