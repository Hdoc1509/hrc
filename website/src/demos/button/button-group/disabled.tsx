import { useState } from "react";
import { Button, ButtonGroup } from "@hrc/button";
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
      <div>
        <ButtonGroup disabled={disabled}>
          <Group />
        </ButtonGroup>
        <ButtonGroup variant="outline" disabled={disabled}>
          <Group />
        </ButtonGroup>
        <ButtonGroup variant="text" disabled={disabled}>
          <Group />
        </ButtonGroup>
      </div>
      <div>
        <ButtonGroup color="warning" disabled={disabled}>
          <Group />
        </ButtonGroup>
        <ButtonGroup color="info" variant="outline" disabled={disabled}>
          <Group />
        </ButtonGroup>
        <ButtonGroup color="success" variant="text" disabled={disabled}>
          <Group />
        </ButtonGroup>
      </div>
    </>
  );
}
