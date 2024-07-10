import { Fragment } from "react";
import { Button, ButtonGroup } from "@hrc/button";

const colors = [
  "primary",
  "secondary",
  "error",
  "info",
  "warning",
  "success",
] as const;

export function ButtonGroupColors() {
  return colors.map((color) => (
    <div key={`button-group-${color}`}>
      <ButtonGroup color={color}>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup color={color} variant="outline">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup color={color} variant="text">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </div>
  ));
}
