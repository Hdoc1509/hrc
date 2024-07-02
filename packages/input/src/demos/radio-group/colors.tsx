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
  return (
    <>
      {colors.map((color) => (
        <div key={`radio-group-colors-${color}`}>
          <RadioGroup
            name={`radio-group-colors-${color}`}
            color={color}
            options={[
              { label: `${toTitleCase(color)}`, value: color },
              {
                label: `${toTitleCase(color)} (light)`,
                value: `${color}-light`,
              },
            ]}
            defaultValue={color}
          />
        </div>
      ))}
    </>
  );
}
