import { clsx } from "clsx";
import { Label } from "../Label";
import { Simplify } from "@hdoc-react/type-utils";
import type { InputProps } from "../Input";
import type { ComponentProps } from "react";
import "./style.scss";

const autosizeTextarea = (textarea: HTMLTextAreaElement) => {
  textarea.style.height = "auto";
  textarea.style.height = `${textarea.scrollHeight + 2}px`;
  // NOTE: ↓ This for automatically taking into consideration the border
  // textarea.style.height = `${textarea.scrollHeight + Number(getComputedStyle(textarea).borderWidth.slice(0, -2)) * 2}px`
};

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
  const textareaClass = clsx(
    "textarea",
    {
      "textarea--error": error,
      "textarea--fullwidth": fullWidth,
    },
    className,
  );

  return (
    <Label error={error} fullwidth={fullWidth} className={labelClassName}>
      {required && label ? `${label} *` : label}
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
    </Label>
  );
};
