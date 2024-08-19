import { clsx } from "clsx";
import { Label } from "../Label";
import { CheckboxIcon, CheckboxIconChecked } from "../Icons";
import { CheckboxProps } from "./types";
import "./style.scss";

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
}: CheckboxProps): JSX.Element => {
  const wrapperClass = clsx(
    "checkbox",
    {
      [`checkbox--${size}`]: size,
      "checkbox--disabled": disabled,
      [`checkbox--${color}`]: color,
    },
    className,
  );

  return (
    <Label disabled={disabled} className={labelClassName} checkbox>
      <span className={wrapperClass}>
        <input
          {...restProps}
          className="checkbox__inner"
          type="checkbox"
          disabled={disabled}
          required={required}
          hidden
        />
        <span className="checkbox__icon">
          {icon ?? <CheckboxIcon />}
          {iconChecked ?? <CheckboxIconChecked />}
        </span>
      </span>
      {required && label ? `${label} *` : label}
    </Label>
  );
};
