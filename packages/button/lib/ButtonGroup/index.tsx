import clsx from "clsx";
import { Simplify } from "@hrc/type-utils";
import { ButtonProps } from "../Button";
import "./style.scss";

type Props = Simplify<
  Pick<ButtonProps, "noShadow" | "size" | "color" | "variant" | "disabled"> & {
    column?: boolean;
  } & React.ComponentProps<"div">
>;

export const ButtonGroup = ({
  noShadow,
  size,
  color,
  variant,
  className,
  column,
  disabled,
  ...restProps
}: Props): JSX.Element => {
  const buttonGroupClass = clsx(
    "button-group",
    {
      [`button-group--${size}`]: size,
      "button-group--column": column,
      [`button--${variant}`]: variant,
      "button--no-shadow": noShadow,
      [`button--${color}`]: color,
      "button--disabled": disabled,
    },
    className,
  );

  return <div {...restProps} role="group" className={buttonGroupClass} />;
};
