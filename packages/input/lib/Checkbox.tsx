import { clsx } from "clsx";
import { Label } from "./Label";
import { CheckboxIcon, CheckboxIconChecked } from "./Icons";
import { ComponentProps, ReactNode } from "react";
import { Simplify } from "@hdoc-react/type-utils";
import { InputProps } from "./Input";
import "./Checkbox.scss";

type Props = Simplify<
  Partial<{
    icon: ReactNode;
    iconChecked: ReactNode;
    size: "small" | "large";
    color: "primary" | "secondary" | "info" | "success" | "warning" | "error";
  }> &
    Pick<InputProps, "label" | "labelClassName"> &
    Omit<ComponentProps<"input">, "size" | "color" | "type">
>;

export const Checkbox = ({
  label,
  labelClassName,
  icon,
  iconChecked,
  size,
  color,
  className,
  disabled,
  required,
  ...restProps
}: Props): JSX.Element => {
  const wrapperClass = clsx(
    "checkbox-wrapper",
    {
      [`checkbox-wrapper--${size}`]: size,
      "checkbox-wrapper--disabled": disabled,
      [`checkbox-wrapper--${color}`]: color,
    },
    className,
  );

  return (
    <Label disabled={disabled} className={labelClassName} checkbox>
      <div className={wrapperClass}>
        <input
          type="checkbox"
          disabled={disabled}
          required={required}
          {...restProps}
        />
        <span className="checkbox">
          {icon ?? <CheckboxIcon />}
          {iconChecked ?? <CheckboxIconChecked />}
        </span>
      </div>
      {required && label ? `${label} *` : label}
    </Label>
  );
};
