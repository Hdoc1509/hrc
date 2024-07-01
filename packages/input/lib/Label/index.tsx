import { clsx } from "clsx";
import { LabelProps } from "./types";
import "./style.scss";

export const Label = ({
  className,
  error,
  fullwidth,
  checkbox,
  radio,
  row,
  disabled,
  children,
}: React.PropsWithChildren<LabelProps>) => {
  const labelClass = clsx(
    "label",
    {
      "label--error": error,
      "label--fullwidth": fullwidth,
      "label--row": checkbox ?? radio ?? row,
      "label--checkbox": checkbox,
      "label--radio": radio,
      "label--disabled": disabled,
    },
    className,
  );

  return <label className={labelClass}>{children}</label>;
};
