import { Button, ButtonGroup } from "@lib/main";

const colors = ["secondary", "error"] as const;

export function ButtonGroupColumn() {
  return colors.map((color) => (
    <div key={`button-group-column-${color}`}>
      <ButtonGroup color={color} column>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup color={color} variant="outline" column>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup color={color} variant="text" column>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </div>
  ));
}
