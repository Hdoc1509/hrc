import { clsx } from "clsx";
import { ComponentProps, ReactNode } from "react";
import { Simplify } from "type-fest";

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
  placeholder,
  iconStart,
  iconEnd,
  required,
  ...restProps
}: InputProps): JSX.Element => {
  const labelClass = clsx(
    "input-label",
    {
      "input-label--error": error,
      "input-label--fullwidth": fullWidth,
    },
    labelClassName,
  );
  const inputWrapperClass = clsx(
    "input-wrapper",
    {
      "input-wrapper--error": error,
      disabled,
      [`input-wrapper--${size}`]: size,
      "input-wrapper--fullwidth": fullWidth,
    },
    className,
  );

  return (
    <label className={labelClass}>
      {required ? `${label} *` : label}
      <div className={inputWrapperClass}>
        {iconStart}
        <input
          className="input"
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          {...restProps}
        />
        {iconEnd}
      </div>
      {helperText && <span className="input-helper">{helperText}</span>}
    </label>
  );
};
