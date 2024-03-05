import clsx from "clsx";
import type { Simplify } from "@hdoc-react/type-utils";
import type { ButtonProps } from "./Button";

type Props = Simplify<Omit<ButtonProps, "iconStart" | "iconEnd">>;

export const ButtonIcon = ({
  disableShadow,
  size,
  color,
  variant,
  className,
  roundedSide,
  fullRounded,
  ...restProps
}: Props): JSX.Element => {
  const buttonClass = clsx(
    ["button", "button--icon"],
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

  return <button {...restProps} className={buttonClass} />;
};
