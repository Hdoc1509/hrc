import clsx from "clsx";
import { Icon, type IconProps } from "@hdoc/react-material-icons";
import type { Simplify } from "type-fest";
import type { ComponentProps } from "react";

export type ButtonProps = Simplify<
  {
    variant?: "outline" | "text";
    disableShadow?: boolean;
    iconStart?: IconProps["name"];
    iconEnd?: IconProps["name"];
    iconVariant?: IconProps["variant"];
    text?: string;
    size?: "small" | "large";
    color?: "primary" | "secondary" | "danger" | "info" | "warning" | "success";
    roundedSide?: "top" | "bottom" | "left" | "right";
  } & ComponentProps<"button">
>;

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
