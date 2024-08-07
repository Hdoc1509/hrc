import { useMemo } from "react";
import clsx from "clsx";
import { Radio } from "../Radio";
import { RadioGroupContext } from "./context";
import { RadioGroupProps, RadioOption } from "./types";
import "./style.scss";

export const RadioGroup = <T extends RadioOption, V extends string>({
  options,
  name,
  form,
  disabled,
  value,
  defaultValue,
  className,
  color,
  size,
  row,
  children,
  onChange,
  ...restProps
}: React.PropsWithChildren<RadioGroupProps<T, V>>) => {
  const groupClass = clsx(
    "radio-group",
    {
      "radio-group--row": row,
    },
    className,
  );

  const groupContext = useMemo(
    () => ({
      form,
      disabled,
      name,
      value,
      defaultValue,
      onChange,
      color,
      size,
    }),
    [color, defaultValue, form, name, onChange, size, value, disabled],
  );

  return (
    <RadioGroupContext.Provider value={groupContext}>
      <div {...restProps} className={groupClass}>
        {children ??
          options?.map(({ label, value: optionValue }) => (
            <Radio
              key={clsx(form, name, label, optionValue)}
              label={label}
              value={optionValue}
            />
          ))}
      </div>
    </RadioGroupContext.Provider>
  );
};
