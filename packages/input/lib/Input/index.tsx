import { clsx } from "clsx";
import { Label } from "../Label";
import { Simplify } from "@hrc/type-utils";
import "./style.scss";

export type InputProps = Simplify<
  Partial<{
    label: string;
    labelClassName: string;
    error: boolean;
    helperText: string;
    fullWidth: boolean;
    size: "small";
    iconStart: React.ReactNode;
    iconEnd: React.ReactNode;
  }> &
    Omit<React.ComponentProps<"input">, "size" | "color">
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
    "input",
    {
      "input--error": error,
      "input--disabled": disabled,
      [`input--${size}`]: size,
      "input--fullwidth": fullWidth,
    },
    className,
  );

  return (
    <Label error={error} fullwidth={fullWidth} className={labelClassName}>
      {required && label ? `${label} *` : label}
      <div className={inputWrapperClass}>
        {iconStart}
        <input
          {...restProps}
          className="input__inner"
          disabled={disabled}
          required={required}
        />
        {iconEnd}
      </div>
      {helperText && <span className="helper-text">{helperText}</span>}
    </Label>
  );
};
