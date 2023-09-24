import clsx from "clsx";
import { Icon } from "@hdoc/react-material-icons";
import type { ButtonProps } from "./types";
import "./css/styles.scss";

export const Button = ({
  variant,
  disableShadow = false,
  iconStart,
  iconEnd,
  iconStyle,
  size,
  color,
  className,
  text,
  ...restProps
}: ButtonProps) => {
  const buttonClass = clsx(
    "button",
    {
      [`button--${variant}`]: variant,
      ["button--no-shadow"]: disableShadow,
      [`button--${size}`]: size,
      [`button--${color}`]: color,
    },
    className,
  );

  return (
    <button {...restProps} className={buttonClass}>
      {iconStart && <Icon name={iconStart} variant={iconStyle} size="small" />}
      {text ?? "Default"}
      {iconEnd && <Icon name={iconEnd} variant={iconStyle} size="small" />}
    </button>
  );
};
