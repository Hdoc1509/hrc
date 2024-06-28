import { clsx } from "clsx";
import "./style.scss";

type Props = {
  className?: string;
  error?: boolean;
  fullwidth?: boolean;
  row?: boolean;
  disabled?: boolean;
};

export const Label = ({
  className,
  error,
  fullwidth,
  row,
  disabled,
  children,
}: React.PropsWithChildren<Props>) => {
  const labelClass = clsx(
    "label",
    {
      "label--error": error,
      "label--fullwidth": fullwidth,
      "label--row": row,
      "label--disabled": disabled,
    },
    className,
  );

  return <label className={labelClass}>{children}</label>;
};
