import clsx from "clsx";
import { Simplify } from "@hrc/type-utils";
import { Radio, RadioProps } from "../Radio";
import "./style.scss";

export type RadioOption = { label: string; value: string };

type Props = Simplify<
  {
    options: RadioOption[];
    name: string;
    value?: string;
    onChange?: (value: string) => void;
    row?: boolean;
  } & Pick<RadioProps, "color" | "form" | "defaultValue"> &
    Omit<React.ComponentProps<"div">, "onChange" | "defaultValue">
>;

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
}: Props) => {
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
          key={label}
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
