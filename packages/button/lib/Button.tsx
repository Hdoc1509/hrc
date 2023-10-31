import clsx from "clsx";
import { Icon } from "@hdoc/react-material-icons";
import type { ButtonIconProps, ButtonProps } from "./types";
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
  ...restProps
}: ButtonProps): JSX.Element => {
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
      {iconStart && (
        <Icon name={iconStart} variant={iconVariant} size="small" />
      )}
      {text ?? "Default"}
      {iconEnd && <Icon name={iconEnd} variant={iconVariant} size="small" />}
    </button>
  );
};

export const ButtonIcon = ({
  disableShadow,
  size,
  color,
  variant,
  className,
  icon,
  iconVariant,
  ...restProps
}: ButtonIconProps): JSX.Element => {
  const buttonClass = clsx(
    ["button", "button--icon"],
    {
      [`button--${variant}`]: variant,
      ["button--no-shadow"]: disableShadow,
      [`button--${color}`]: color,
    },
    className,
  );

  return (
    <button {...restProps} className={buttonClass}>
      <Icon name={icon} variant={iconVariant} size={size} />
    </button>
  );
};
