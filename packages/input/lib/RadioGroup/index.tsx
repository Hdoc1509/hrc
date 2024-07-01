import clsx from "clsx";
import { Radio } from "../Radio";
import { RadioGroupProps } from "./types";
import "./style.scss";

export const RadioGroup = ({
  options,
  name,
  form,
  value,
  defaultValue,
  className,
  color,
  row,
  onChange,
  ...restProps
}: RadioGroupProps) => {
  const groupClass = clsx(
    "radio-group",
    {
      [`radio-group--${color}`]: color,
      "radio-group--row": row,
    },
    className,
  );

  return (
    <div {...restProps} className={groupClass}>
      {options.map(({ label, value: optionValue }, idx) => (
        <Radio
          key={clsx(form, name, label, optionValue)}
          label={label}
          name={name}
          form={form}
          defaultChecked={
            label === value || label === defaultValue || idx === 0
          }
          onChange={onChange ? () => onChange(label) : undefined}
          value={optionValue}
          color={color}
        />
      ))}
    </div>
  );
};
