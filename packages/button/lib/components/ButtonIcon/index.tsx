import clsx from "clsx";
import { Button, ButtonProps } from "../Button";
import type { Simplify } from "@hdoc-react/type-utils";
import "./style.scss";

type Props = Simplify<Omit<ButtonProps, "iconStart" | "iconEnd">>;

export const ButtonIcon = ({ className, ...restProps }: Props): JSX.Element => {
  const buttonClass = clsx("button--icon", className);

  return (
    <Button
      {...restProps}
      className={buttonClass}
      iconStart={null}
      iconEnd={null}
    />
  );
};
