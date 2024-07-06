import { Input } from "@lib/main";

const colors = [
  "primary",
  "secondary",
  "error",
  "info",
  "warning",
  "success",
] as const;

const toTitleCase = (str: string) => `${str[0].toUpperCase()}${str.slice(1)}`;

export function InputColors() {
  return (
    <>
      {colors.map((color) => (
        <Input
          key={`input-${color}`}
          color={color}
          label={`${toTitleCase(color)}`}
          placeholder="Hello world"
          // the following classnames are only for demo purposes
          className="input--focused"
          labelClassName="label--focused"
        />
      ))}
    </>
  );
}
