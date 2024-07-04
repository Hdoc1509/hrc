import { useRadioGroupContext } from "../RadioGroup/context";
import clsx from "clsx";
import { Label } from "../Label";
import { RadioChecked, RadioUnchecked } from "../Icons";
import { RadioProps } from "./types";
import "./style.scss";

export const Radio = ({
  label,
  labelClassName,
  size,
  color,
  className,
  disabled,
  required,
  name,
  form,
  defaultChecked,
  value,
  onChange,
  ...restProps
}: RadioProps) => {
  const group = useRadioGroupContext();

  let isDefaultChecked = defaultChecked;

  if ((group?.defaultValue != null || group?.value != null) && value != null) {
    isDefaultChecked = group.defaultValue === value || group.value === value;
  }

  const wrapperClass = clsx(
    "radio",
    {
      [`radio--${size ?? group?.size}`]: size ?? group?.size,
      "radio--disabled": disabled,
      [`radio--${color ?? group?.color}`]: color ?? group?.color,
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
          onChange={onChange ?? group?.onChange}
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
