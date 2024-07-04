import { createContext, useContext } from "react";
import { RadioProps } from "../Radio/types";
import { RadioGroupProps, RadioOption } from "./types";

export type RadioGroupContextValue = Pick<
  RadioGroupProps<RadioOption>,
  "form" | "name" | "value" | "defaultValue" | "color" | "size"
> &
  Pick<RadioProps, "onChange">;

export const RadioGroupContext = createContext<RadioGroupContextValue | null>(
  null,
);

export const useRadioGroupContext = (): RadioGroupContextValue | null => {
  return useContext(RadioGroupContext);
};
