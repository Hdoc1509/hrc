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
    rounded?: "top" | "bottom" | "left" | "right" | "full" | "none";
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
  rounded,
  ...restProps
}: ButtonProps): JSX.Element => {
  const buttonClass = clsx(
    "button",
    {
      [`button--${variant}`]: variant,
      ["button--no-shadow"]: disableShadow,
      [`button--${size}`]: size,
      [`button--${color}`]: color,
      [`button--rounded-${rounded}`]: rounded,
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
