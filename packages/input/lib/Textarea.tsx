import { clsx } from "clsx";
import { autosizeTextarea } from "./utils";
import { Simplify } from "type-fest";
import type { InputProps } from "./Input";
import type { ComponentProps } from "react";

type Props = Simplify<
  Omit<InputProps, "size" | "min" | "max"> &
    Omit<ComponentProps<"textarea">, "color" | "cols">
>;

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
}: Props): JSX.Element => {
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
