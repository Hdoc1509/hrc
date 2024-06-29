import clsx from "clsx";
import { Simplify } from "@hrc/type-utils";
import { Radio, RadioProps } from "../Radio";
import "./style.scss";

type Props<T> = Simplify<
  {
    options: readonly T[];
    name: string;
    row?: boolean;
  } & Pick<RadioProps, "color" | "form" | "defaultValue"> &
    React.ComponentProps<"div">
>;

// TODO: if receives children render them instead of options
export const RadioGroup = <T extends string>({
  options,
  name,
  form,
  defaultValue,
  className,
  color,
  row,
  ...restProps
}: Props<T>) => {
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
          defaultChecked={label === defaultValue}
          value={label}
          color={color}
        />
      ))}
    </div>
  );
};
