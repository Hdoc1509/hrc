import { clsx } from "clsx";
import { Icon } from "@hdoc/react-material-icons";
import type { InputProps } from "./types";
import "./css/styles.scss";

export const Input = ({
  label = "Label",
  labelClassName,
  className,
  disabled,
  error,
  helperText,
  fullWidth,
  size,
  placeholder = "Placeholder",
  iconStart,
  iconEnd,
  iconVariant,
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
      disabled: disabled,
      [`input-wrapper--${size}`]: size,
      "input-wrapper--fullwidth": fullWidth,
    },
    className,
  );

  return (
    <label className={labelClass}>
      {required ? `${label} *` : label}
      <div className={inputWrapperClass}>
        {iconStart && (
          <Icon
            name={iconStart}
            variant={iconVariant}
            className="input-icon"
            disabled={disabled}
          />
        )}
        <input
          className="input"
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          {...restProps}
        />
        {iconEnd && (
          <Icon
            name={iconEnd}
            variant={iconVariant}
            className="input-icon"
            disabled={disabled}
          />
        )}
      </div>
      {helperText && <span className="input-helper">{helperText}</span>}
    </label>
  );
};
