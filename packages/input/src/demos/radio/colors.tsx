import { Radio } from "@lib/main";

const colors = [
  "primary",
  "secondary",
  "error",
  "info",
  "warning",
  "success",
] as const;

const toTitleCase = (str: string) => `${str[0].toUpperCase()}${str.slice(1)}`;

export function RadioColors() {
  return (
    <>
      {colors.map((color) => (
        <div key={`radio-colors-${color}`}>
          <Radio
            name={`radio-colors-${color}`}
            color={color}
            label={`${toTitleCase(color)}`}
            value={color}
            defaultChecked
          />
        </div>
      ))}
    </>
  );
}
