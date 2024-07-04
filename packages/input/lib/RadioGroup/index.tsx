import clsx from "clsx";
import { Radio } from "../Radio";
import { RadioGroupProps, RadioOption } from "./types";
import "./style.scss";

export const RadioGroup = <T extends RadioOption>({
  options,
  name,
  form,
  value,
  defaultValue,
  className,
  color,
  size,
  row,
  onChange,
  ...restProps
}: RadioGroupProps<T>) => {
  const groupClass = clsx(
    "radio-group",
    {
      "radio-group--row": row,
    },
    className,
  );

  return (
    <div {...restProps} className={groupClass}>
      {options.map(({ label, value: optionValue }) => (
        <Radio
          key={clsx(form, name, label, optionValue)}
          label={label}
          name={name}
          form={form}
          defaultChecked={optionValue === value || optionValue === defaultValue}
          onChange={onChange ? () => onChange(optionValue) : undefined}
          value={optionValue}
          color={color}
          size={size}
        />
      ))}
    </div>
  );
};
