import clsx from "clsx";
import type { Simplify } from "@hdoc-react/type-utils";
import { Button, ButtonProps } from "./Button";

type Props = Simplify<Omit<ButtonProps, "iconStart" | "iconEnd">>;

export const ButtonIcon = ({ className, ...restProps }: Props): JSX.Element => {
  const buttonClass = clsx("button--icon", className);

  return (
    <Button
      {...restProps}
      className={buttonClass}
      iconEnd={null}
      iconStart={null}
    />
  );
};
