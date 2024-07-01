import clsx from "clsx";
import { autosizeTextarea } from "./autosize";
import { Label } from "../Label";
import { Simplify } from "@hrc/type-utils";
import { InputProps } from "../Input";
import "./style.scss";

type Props = Simplify<
  {
    autosize?: boolean;
  } & Pick<
    InputProps,
    "label" | "labelClassName" | "error" | "helperText" | "fullWidth"
  > &
    Omit<React.ComponentProps<"textarea">, "size" | "color">
>;

export const Textarea = ({
  label,
  labelClassName,
  className,
  error,
  helperText,
  fullWidth,
  required,
  autosize,
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
