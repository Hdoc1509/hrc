import { Button, ButtonGroup } from "@hrc/button";

const colors = ["secondary", "error"] as const;

export function ButtonGroupColumn() {
  return (
    <>
      {colors.map((color) => (
        <div key={`button-group-column-${color}`}>
          <ButtonGroup
            key={`button-group-column-${color}-default`}
            color={color}
            column
          >
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
          <ButtonGroup
            key={`button-group-column-${color}-outline`}
            color={color}
            variant="outline"
            column
          >
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
          <ButtonGroup
            key={`button-group-column-${color}-text`}
            color={color}
            variant="text"
            column
          >
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </div>
      ))}
    </>
  );
}
