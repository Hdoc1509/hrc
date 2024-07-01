import clsx from "clsx";
import { Simplify } from "@hrc/type-utils";
import { Radio, RadioProps } from "../Radio";
import "./style.scss";

type Props = Simplify<
  {
    options: string[];
    name: string;
    value?: string;
    onChange?: (value: string) => void;
    row?: boolean;
  } & Pick<RadioProps, "color" | "form" | "defaultValue"> &
    Omit<React.ComponentProps<"div">, "onChange" | "defaultValue">
>;

// TODO: if receives children render them instead of options
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
      {options.map((label) => (
        <Radio
          key={label}
          label={label}
          name={name}
          form={form}
          defaultChecked={label === value || label === defaultValue}
          onChange={onChange ? () => onChange(label) : undefined}
          value={label}
          color={color}
        />
      ))}
    </div>
  );
};
