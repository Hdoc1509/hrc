import clsx from "clsx";
import type { Simplify } from "type-fest";
import type { ComponentProps, ReactNode } from "react";

export type ButtonProps = Simplify<
  {
    variant?: "outline" | "text";
    disableShadow?: boolean;
    iconStart?: ReactNode;
    iconEnd?: ReactNode;
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
      {iconStart}
      {text ?? "Default"}
      {iconEnd}
    </button>
  );
};
