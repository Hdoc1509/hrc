import clsx from "clsx";
import { Icon } from "@hdoc/react-material-icons";
import type { ButtonProps } from "./types"
import "./css/styles.scss";

export const Button = ({
  variant,
  disableShadow = false,
  startIcon,
  endIcon,
  iconStyle,
  size,
  color,
  className,
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
      {startIcon && <Icon name={startIcon} variant={iconStyle} size="small" />}
      Default
      {endIcon && <Icon name={endIcon} variant={iconStyle} size="small" />}
    </button>
  );
};
