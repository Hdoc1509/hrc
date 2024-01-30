import clsx from "clsx";
import type { Simplify } from "type-fest";
import type { ComponentProps, ReactNode } from "react";

export type ButtonProps = Simplify<
  {
    variant?: "outline" | "text";
    disableShadow?: boolean;
    iconStart?: ReactNode;
    iconEnd?: ReactNode;
    size?: "small" | "large";
    color?: "primary" | "secondary" | "error" | "info" | "warning" | "success";
    roundedSide?: "top" | "bottom" | "left" | "right";
  } & ComponentProps<"button">
>;

export const Button = ({
  variant,
  disableShadow = false,
  iconStart,
  iconEnd,
  size,
  color,
  className,
  children,
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
      {iconStart}
      {children ?? "Default"}
      {iconEnd}
    </button>
  );
};
