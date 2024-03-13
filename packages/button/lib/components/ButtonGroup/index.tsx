import clsx from "clsx";
import { Simplify } from "@hdoc-react/type-utils";
import { ButtonProps } from "../Button";
import "./style.scss";

type Props = Simplify<
  Pick<
    ButtonProps,
    "disableShadow" | "size" | "color" | "variant" | "disabled"
  > & {
    column?: boolean;
  } & React.ComponentProps<"div">
>;

export const ButtonGroup = ({
  disableShadow,
  size,
  color,
  variant,
  className,
  column,
  disabled,
  ...restProps
}: Props) => {
  const buttonGroupClass = clsx(
    "button-group",
    {
      [`button-group--${size}`]: size,
      "button-group--column": column,
      [`button--${variant}`]: variant,
      "button--no-shadow": disableShadow,
      [`button--${color}`]: color,
      "button--disabled": disabled,
    },
    className,
  );

  return <div {...restProps} role="group" className={buttonGroupClass} />;
};
