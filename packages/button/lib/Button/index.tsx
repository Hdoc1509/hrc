import { useButtonGroupContext } from "../ButtonGroup/context";
import clsx from "clsx";
import type { ButtonProps } from "./types";
import "./style.scss";

export const Button = ({
  variant: variantProp,
  noShadow,
  iconStart,
  iconEnd,
  size: sizeProp,
  color: colorProp,
  className,
  children,
  rounded,
  disabled: disabledProp,
  ...restProps
}: ButtonProps): JSX.Element => {
  const group = useButtonGroupContext();

  const variant = variantProp ?? group?.variant;
  const size = sizeProp ?? group?.size;
  const color = colorProp ?? group?.color;
  const disabled = disabledProp ?? group?.disabled;

  const buttonClass = clsx(
    "button",
    {
      [`button--${variant}`]: variant,
      ["button--no-shadow"]: noShadow,
      [`button--${size}`]: size,
      [`button--${color}`]: color,
      [`button--rounded-${rounded}`]: rounded,
    },
    className,
  );

  return (
    <button {...restProps} className={buttonClass} disabled={disabled}>
      {iconStart}
      {children}
      {iconEnd}
    </button>
  );
};
