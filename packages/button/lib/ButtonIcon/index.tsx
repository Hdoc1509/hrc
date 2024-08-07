import clsx from "clsx";
import { Button } from "../Button";
import type { ButtonProps } from "../Button/types";
import type { Simplify } from "@hrc/type-utils";
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
