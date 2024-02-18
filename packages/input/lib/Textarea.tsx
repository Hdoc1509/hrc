import { clsx } from "clsx";
import { autosizeTextarea } from "./utils";
import { Simplify } from "@hdoc-react/type-utils";
import type { InputProps } from "./Input";
import type { ComponentProps } from "react";
import "./Textarea.scss";

type Props = Simplify<
  Pick<
    InputProps,
    "label" | "labelClassName" | "error" | "helperText" | "fullWidth"
  > &
    Omit<ComponentProps<"textarea">, "size" | "color">
>;

export const Textarea = ({
  label,
  labelClassName,
  className,
  error,
  helperText,
  fullWidth,
  required,
  onChange,
  ...restProps
}: Props): JSX.Element => {
  const labelClass = clsx(
    "label",
    {
      "label--error": error,
      "label--fullwidth": fullWidth,
    },
    labelClassName,
  );
  const textareaClass = clsx(
    "textarea",
    {
      "textarea--error": error,
      "textarea--fullwidth": fullWidth,
    },
    className,
  );

  return (
    <label className={labelClass}>
      {required ? `${label} *` : label}
      <textarea
        className={textareaClass}
        required={required}
        onChange={(e) => {
          autosizeTextarea(e.currentTarget);
          onChange?.(e);
        }}
        {...restProps}
      />
      {helperText && <span className="helper-text">{helperText}</span>}
    </label>
  );
};
