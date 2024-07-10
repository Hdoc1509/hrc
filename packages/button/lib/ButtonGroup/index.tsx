import { useMemo } from "react";
import clsx from "clsx";
import { ButtonGroupContext } from "./context";
import type { ButtonGroupProps } from "./types";
import "./style.scss";

export const ButtonGroup = ({
  noShadow,
  size,
  color,
  variant,
  className,
  column,
  disabled,
  ...restProps
}: ButtonGroupProps): JSX.Element => {
  const buttonGroupClass = clsx(
    "button-group",
    {
      [`button-group--${variant}`]: variant,
      "button-group--no-shadow": noShadow,
      "button-group--disabled": disabled,
      "button-group--column": column,
    },
    className,
  );

  const groupContext = useMemo(
    () => ({ color, size, variant, disabled }),
    [color, disabled, size, variant],
  );

  return (
    <ButtonGroupContext.Provider value={groupContext}>
      <div {...restProps} role="group" className={buttonGroupClass} />
    </ButtonGroupContext.Provider>
  );
};
