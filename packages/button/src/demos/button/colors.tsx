import { Button } from "@lib/main";

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
        <>
          <Button key={`button-${color}-default`} color={color}>
            {toTitleCase(color)}
          </Button>
          <Button
            key={`button-${color}-outline`}
            color={color}
            variant="outline"
          >
            Outline
          </Button>
          <Button key={`button-${color}-text`} color={color} variant="text">
            Text
          </Button>
        </>
      ))}
    </>
  );
}
