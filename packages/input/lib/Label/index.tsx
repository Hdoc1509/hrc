import { clsx } from "clsx";
import "./style.scss";

type Props = {
  className?: string;
  error?: boolean;
  fullwidth?: boolean;
  checkbox?: boolean;
  radio?: boolean;
  row?: boolean;
  disabled?: boolean;
};

export const Label = ({
  className,
  error,
  fullwidth,
  checkbox,
  radio,
  row,
  disabled,
  children,
}: React.PropsWithChildren<Props>) => {
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
