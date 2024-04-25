import clsx from "clsx";
import { Simplify, Size, Color } from "@hrc/type-utils";
import "./style.scss";

export type ButtonProps = Simplify<
  {
    variant?: "outline" | "text";
    disableShadow?: boolean;
    iconStart?: React.ReactNode;
    iconEnd?: React.ReactNode;
    size?: Size;
    color?: Color;
    roundedSide?: "top" | "bottom" | "left" | "right";
    fullRounded?: boolean;
  } & React.ComponentProps<"button">
>;

export const Button = ({
  variant,
  disableShadow,
  iconStart,
  iconEnd,
  size,
  color,
  className,
  children,
  roundedSide,
  fullRounded,
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
      "button--full-rounded": fullRounded,
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
