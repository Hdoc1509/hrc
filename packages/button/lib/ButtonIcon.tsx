import clsx from "clsx";
import { Icon, type IconProps } from "@hdoc/react-material-icons";
import type { Simplify } from "type-fest";
import type { ButtonProps } from "./Button";

type Props = Simplify<
  {
    icon: IconProps["name"];
  } & Omit<ButtonProps, "iconStart" | "iconEnd" | "text">
>;

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
}: Props): JSX.Element => {
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
