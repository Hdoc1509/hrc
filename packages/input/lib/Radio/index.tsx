import { useRadioGroupContext } from "../RadioGroup/context";
import clsx from "clsx";
import { Label } from "../Label";
import { RadioChecked, RadioUnchecked } from "../Icons";
import { RadioProps } from "./types";
import "./style.scss";

export const Radio = ({
  label,
  labelClassName,
  size: sizeProp,
  color: colorProp,
  className,
  disabled: disabledProp,
  required,
  name,
  form,
  defaultChecked,
  value,
  onChange,
  ...restProps
}: RadioProps) => {
  const group = useRadioGroupContext();

  const size = sizeProp ?? group?.size;
  const color = colorProp ?? group?.color;
  const disabled = disabledProp ?? group?.disabled;
  let isDefaultChecked = defaultChecked;

  if ((group?.defaultValue != null || group?.value != null) && value != null) {
    isDefaultChecked = group.defaultValue === value || group.value === value;
  }

  const wrapperClass = clsx(
    "radio",
    {
      [`radio--${size}`]: size,
      "radio--disabled": disabled,
      [`radio--${color}`]: color,
    },
    className,
  );

  return (
    <Label disabled={disabled} className={labelClassName} radio>
      <span className={wrapperClass}>
        <input
          {...restProps}
          className="radio__inner"
          type="radio"
          disabled={disabled}
          required={required}
          name={name ?? group?.name}
          form={form ?? group?.form}
          value={value}
          onChange={onChange ?? ((e) => group?.onChange?.(e.target.value))}
          defaultChecked={isDefaultChecked}
        />
        <span className="radio__icon">
          <RadioUnchecked />
          <RadioChecked />
        </span>
      </span>
      {required ? `${label} *` : label}
    </Label>
  );
};
