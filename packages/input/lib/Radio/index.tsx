import clsx from "clsx";
import { Label } from "../Label";
import { RadioChecked, RadioUnchecked } from "../Icons";
import { Simplify } from "@hrc/type-utils";
import { CheckboxProps } from "../Checkbox";
import "./style.scss";

type Props = Simplify<
  Omit<CheckboxProps, "label" | "icon" | "iconChecked"> & { label: string }
>;

export const Radio = ({
  label,
  labelClassName,
  size,
  color,
  className,
  disabled,
  required,
  ...restProps
}: Props) => {
  const wrapperClass = clsx(
    "radio",
    {
      [`radio--${size}`]: size,
      "radio--disabled": disabled,
      [`radio--${color}`]: color,
    },
    className,
  );

  return (
    <Label disabled={disabled} className={labelClassName} radio>
      <span className={wrapperClass}>
        <input
          {...restProps}
          className="radio__inner"
          type="radio"
          disabled={disabled}
          required={required}
        />
        <span className="radio__icon">
          <RadioUnchecked />
          <RadioChecked />
        </span>
      </span>
      {required ? `${label} *` : label}
    </Label>
  );
};
