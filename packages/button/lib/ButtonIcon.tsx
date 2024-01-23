import clsx from "clsx";
import type { Simplify } from "type-fest";
import type { ButtonProps } from "./Button";
import { PropsWithChildren } from "react";

type Props = Simplify<Omit<ButtonProps, "iconStart" | "iconEnd" | "text">>;

export const ButtonIcon = ({
  disableShadow,
  size,
  color,
  variant,
  className,
  roundedSide,
  children,
  ...restProps
}: PropsWithChildren<Props>): JSX.Element => {
  const buttonClass = clsx(
    ["button", "button--icon"],
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
      {children}
    </button>
  );
};
