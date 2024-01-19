import { clsx } from "clsx";
import { Icon } from "@hdoc/react-material-icons";
import type { ButtonIconProps } from "./types";

export const ButtonIcon = ({
  disableShadow,
  size,
  color,
  variant,
  className,
  icon,
  iconVariant,
  roundedSide,
  ...restProps
}: ButtonIconProps): JSX.Element => {
  const buttonClass = clsx(
    ["button", "button--icon"],
    {
      [`button--${variant}`]: variant,
      ["button--no-shadow"]: disableShadow,
      [`button--${color}`]: color,
      [`button--${roundedSide}-rounded`]: roundedSide,
    },
    className,
  );

  return (
    <button {...restProps} className={buttonClass}>
      <Icon name={icon} variant={iconVariant} size={size} />
    </button>
  );
};
