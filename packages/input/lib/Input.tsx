import { clsx } from "clsx";
import { Icon } from "@hdoc/react-material-icons";
import type { InputProps } from "./types";
import "./css/styles.scss";

// TODO:
//   add star char if required
export const Input = ({
  label,
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
  const inputClass = clsx(
    "input",
    {
      "input--error": error,
      [`input--${size}`]: size,
      "input-with-icon-start": iconStart,
      "input-with-icon-end": iconEnd,
      "input--fullwidth": fullWidth,
    },
    className,
  );

  return (
    <label className={labelClass}>
      {label ?? "Label"}
      <div className="input-wrapper">
        {iconStart && (
          <Icon
            name={iconStart}
            variant={iconVariant}
            className="input-icon input-icon--start"
            disabled={disabled}
          />
        )}
        <input
          className={inputClass}
          placeholder={placeholder}
          disabled={disabled}
          {...restProps}
        />
        {iconEnd && (
          <Icon
            name={iconEnd}
            variant={iconVariant}
            className="input-icon input-icon--end"
            disabled={disabled}
          />
        )}
      </div>
      {helperText && <span className="input-helper">{helperText}</span>}
    </label>
  );
};
