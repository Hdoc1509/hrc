import clsx from "clsx";
import type { ButtonProps } from "./types";
import "./style.scss";

export const Button = ({
  variant,
  noShadow,
  iconStart,
  iconEnd,
  size,
  color,
  className,
  children,
  rounded,
  ...restProps
}: ButtonProps): JSX.Element => {
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
    <button {...restProps} className={buttonClass}>
      {iconStart}
      {children ?? "Default"}
      {iconEnd}
    </button>
  );
};
