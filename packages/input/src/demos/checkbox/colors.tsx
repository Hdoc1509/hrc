import { Checkbox } from "@lib/main";

const colors = [
  "primary",
  "secondary",
  "error",
  "info",
  "warning",
  "success",
] as const;

const toTitleCase = (str: string) => `${str[0].toUpperCase()}${str.slice(1)}`;

export function CheckboxColors() {
  return colors.map((color) => (
    <Checkbox
      key={`checkbox-${color}`}
      color={color}
      label={`${toTitleCase(color)}`}
      defaultChecked
    />
  ));
}
