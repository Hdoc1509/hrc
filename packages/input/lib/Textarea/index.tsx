import clsx from "clsx";
import { autosizeTextarea } from "./autosize";
import { Label } from "../Label";
import { TextareaProps } from "./types";
import "./style.scss";

export const Textarea = ({
  label,
  labelClassName,
  className,
  error,
  color,
  helperText,
  fullWidth,
  required,
  autosize,
  onChange,
  ...restProps
}: TextareaProps): JSX.Element => {
  const textareaClass = clsx(
    "textarea",
    {
      "textarea--with-error": error,
      "textarea--fullwidth": fullWidth,
      [`textarea--${color}`]: color,
    },
    className,
  );

  return (
    <Label
      color={color}
      error={error}
      fullwidth={fullWidth}
      className={labelClassName}
    >
      {required && label ? `${label} *` : label}
      <textarea
        {...restProps}
        className={textareaClass}
        required={required}
        onChange={(e) => {
          autosize && autosizeTextarea(e.currentTarget);
          onChange?.(e);
        }}
      />
      {helperText && <span className="helper-text">{helperText}</span>}
    </Label>
  );
};
