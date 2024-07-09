import { createContext, useContext } from "react";
import type { ButtonGroupProps } from "./types";

type ButtonGroupContextValue = Pick<
  ButtonGroupProps,
  "size" | "color" | "variant" | "disabled"
>;

export const ButtonGroupContext = createContext<ButtonGroupContextValue | null>(
  null,
);

export const useButtonGroupContext = (): ButtonGroupContextValue | null => {
  return useContext(ButtonGroupContext);
};
