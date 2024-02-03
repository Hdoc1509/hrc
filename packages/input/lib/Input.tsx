import { clsx } from "clsx";
import { ComponentProps, ReactNode } from "react";
import { Simplify } from "type-fest";
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
  placeholder,
  iconStart,
  iconEnd,
  required,
  ...restProps
}: InputProps): JSX.Element => {
  const labelClass = clsx(
    "label",
    {
      "label--error": error,
      "label--fullwidth": fullWidth,
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
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          {...restProps}
          // TODO: Receive placeholder from restProps
        />
        {iconEnd}
      </div>
      {helperText && <span className="helper-text">{helperText}</span>}
    </label>
  );
};
