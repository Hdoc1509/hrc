import { clsx } from "clsx";
import { ComponentProps, ReactNode } from "react";
import { InputProps } from "./Input";
import { CheckboxIcon, CheckboxIconChecked } from "./Icons";
import { Simplify } from "type-fest";
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
}: Props) => {
  const labelClass = clsx(
    ["label", "label--checkbox"],
    {
      "label--disabled": disabled,
    },
    labelClassName,
  );
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
    <label className={labelClass}>
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
      {required ? `${label} *` : label}
    </label>
  );
};
