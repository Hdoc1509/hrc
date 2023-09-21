import clsx from "clsx";
import { ComponentProps } from "react";
import { Icon } from "@hdoc/react-material-icons";
import type { Simplify } from "type-fest";
import "./css/styles.scss";

type IconProps = ComponentProps<typeof Icon>;

type Props = Simplify<
  {
    variant?: "outline" | "text";
    disableShadow?: boolean;
    startIcon?: IconProps["name"];
    endIcon?: IconProps["name"];
    iconStyle?: IconProps["variant"];
    size?: "small" | "large";
    color?: "primary" | "secondary" | "danger";
  } & ComponentProps<"button">
>;

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
}: Props) => {
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
