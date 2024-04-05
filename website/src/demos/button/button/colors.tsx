import { Button } from "@hrc/button";

const colors = [
  "primary",
  "secondary",
  "error",
  "info",
  "warning",
  "success",
] as const;

const toTitleCase = (str: string) => `${str[0].toUpperCase()}${str.slice(1)}`;

export function ButtonColors() {
  return (
    <>
      {colors.map((color) => (
        <div key={`button-${color}`}>
          <Button color={color}>{toTitleCase(color)}</Button>
          <Button color={color} variant="outline">
            Outline
          </Button>
          <Button color={color} variant="text">
            Text
          </Button>
        </div>
      ))}
    </>
  );
}
