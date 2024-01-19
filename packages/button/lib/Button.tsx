import clsx from "clsx";
import { Icon } from "@hdoc/react-material-icons";
import type { ButtonProps } from "./types";
import "./css/styles.scss";

export const Button = ({
  variant,
  disableShadow = false,
  iconStart,
  iconEnd,
  iconVariant,
  size,
  color,
  className,
  text,
  roundedSide,
  ...restProps
}: ButtonProps): JSX.Element => {
  const buttonClass = clsx(
    "button",
    {
      [`button--${variant}`]: variant,
      ["button--no-shadow"]: disableShadow,
      [`button--${size}`]: size,
      [`button--${color}`]: color,
      [`button--${roundedSide}-rounded`]: roundedSide,
    },
    className,
  );

  return (
    <button {...restProps} className={buttonClass}>
      {iconStart && (
        <Icon name={iconStart} variant={iconVariant} size="small" />
      )}
      {text ?? "Default"}
      {iconEnd && <Icon name={iconEnd} variant={iconVariant} size="small" />}
    </button>
  );
};
