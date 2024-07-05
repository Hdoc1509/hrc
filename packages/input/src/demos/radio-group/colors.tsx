import { RadioGroup } from "@lib/main";

const colors = [
  "primary",
  "secondary",
  "error",
  "info",
  "warning",
  "success",
] as const;
type Color = (typeof colors)[number];

const toTitleCase = (str: string) => `${str[0].toUpperCase()}${str.slice(1)}`;

function Group({ color }: { color: Color }) {
  return (
    <RadioGroup
      name={`radio-group-${color}`}
      color={color}
      options={[
        { label: `${toTitleCase(color)}`, value: color },
        { label: "Other option", value: `${color}-light` },
      ]}
      defaultValue={color}
    />
  );
}

export function RadioGroupColors() {
  return (
    <>
      {colors.map((color) => (
        <Group key={`radio-group-${color}`} color={color} />
      ))}
    </>
  );
}
