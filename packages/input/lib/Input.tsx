import { clsx } from "clsx";
import { Label } from "./Label";
import { ComponentProps, ReactNode } from "react";
import { Simplify } from "@hdoc-react/type-utils";
import "./Input.scss";

export type InputProps = Simplify<
  Partial<{
    label: string;
    labelClassName: string;
    error: boolean;
    helperText: string;
    fullWidth: boolean;
    size: "small";
    iconStart: ReactNode;
    iconEnd: ReactNode;
  }> &
    Omit<ComponentProps<"input">, "size" | "color">
>;

export const Input = ({
  label,
  labelClassName,
  className,
  disabled,
  error,
  helperText,
  fullWidth,
  size,
  iconStart,
  iconEnd,
  required,
  ...restProps
}: InputProps): JSX.Element => {
  const inputWrapperClass = clsx(
    "input-wrapper",
    {
      "input-wrapper--error": error,
      "input-wrapper--disabled": disabled,
      [`input-wrapper--${size}`]: size,
      "input-wrapper--fullwidth": fullWidth,
    },
    className,
  );

  return (
    <Label error={error} fullwidth={fullWidth} className={labelClassName}>
      {required && label ? `${label} *` : label}
      <div className={inputWrapperClass}>
        {iconStart}
        <input disabled={disabled} required={required} {...restProps} />
        {iconEnd}
      </div>
      {helperText && <span className="helper-text">{helperText}</span>}
    </Label>
  );
};
