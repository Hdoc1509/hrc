import { useState } from "react";
import { Button, ButtonGroup } from "@lib/main";
import { ToggleDisabled } from "./ToggleDisabled";

const Group = () => {
  return (
    <>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </>
  );
};

export function ButtonGroupDisabled() {
  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <ToggleDisabled disabled={disabled} setter={setDisabled} />

      <ButtonGroup disabled={disabled}>
        <Group />
      </ButtonGroup>
      <ButtonGroup color="warning" disabled={disabled}>
        <Group />
      </ButtonGroup>

      <ButtonGroup variant="outline" disabled={disabled}>
        <Group />
      </ButtonGroup>
      <ButtonGroup color="info" variant="outline" disabled={disabled}>
        <Group />
      </ButtonGroup>

      <ButtonGroup variant="text" disabled={disabled}>
        <Group />
      </ButtonGroup>
      <ButtonGroup color="success" variant="text" disabled={disabled}>
        <Group />
      </ButtonGroup>
    </>
  );
}
