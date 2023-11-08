import { clsx } from "clsx";
import { TextareaProps } from "./types";
import "./css/styles.scss";
import { autosizeTextarea } from "./utils";

export const Textarea = ({
  label = "Label",
  labelClassName,
  className,
  disabled,
  error,
  helperText,
  fullWidth,
  placeholder = "Placeholder",
  required,
  onChange,
  ...restProps
}: TextareaProps): JSX.Element => {
  const labelClass = clsx(
    "input-label",
    {
      "input-label--error": error,
      "input-label--fullwidth": fullWidth,
    },
    labelClassName,
  );
  const inputWrapperClass = clsx(
    ["input-wrapper", "input-wrapper--textarea"],
    {
      "input-wrapper--error": error,
      disabled: disabled,
      "input-wrapper--fullwidth": fullWidth,
    },
    className,
  );

  return (
    <label className={labelClass}>
      {required ? `${label} *` : label}
      <div className={inputWrapperClass}>
        <textarea
          className="input input--textarea"
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          onChange={(e) => {
            autosizeTextarea(e.currentTarget);
            onChange?.(e);
          }}
          {...restProps}
        />
      </div>
      {helperText && <span className="input-helper">{helperText}</span>}
    </label>
  );
};
