import { RadioGroup } from "@lib/main";

const colors = [
  "primary",
  "secondary",
  "error",
  "info",
  "warning",
  "success",
] as const;

const toTitleCase = (str: string) => `${str[0].toUpperCase()}${str.slice(1)}`;

export function RadioGroupColors() {
  return colors.map((color) => (
    <RadioGroup
      key={`radio-group-${color}`}
      name={`radio-group-${color}`}
      color={color}
      options={[
        { label: `${toTitleCase(color)}`, value: color },
        { label: "Other option", value: `${color}-light` },
      ]}
      defaultValue={color}
    />
  ));
}
