import { Button, ButtonGroup } from "@lib/main";

const colors = [
  "primary",
  "secondary",
  "error",
  "info",
  "warning",
  "success",
] as const;

export function ButtonGroupColors() {
  return (
    <>
      {colors.map((color) => (
        <>
          <ButtonGroup key={`button-group-${color}-default`} color={color}>
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
          <ButtonGroup
            key={`button-group-${color}-outline`}
            color={color}
            variant="outline"
          >
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
          <ButtonGroup
            key={`button-group-${color}-text`}
            color={color}
            variant="text"
          >
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </>
      ))}
    </>
  );
}
