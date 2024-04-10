import { useState } from "react";
import { Button, ButtonGroup } from "@lib/main";
import { Icon } from "@hrc/material-icons";

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
      <div>
        <Button
          color={disabled ? "info" : undefined}
          onClick={() => setDisabled(!disabled)}
        >
          {disabled ? <Icon name="toggle_on" /> : <Icon name="toggle_off" />}
          Disabled
        </Button>
      </div>

      <ButtonGroup disabled={disabled}>
        <Group />
      </ButtonGroup>
      <ButtonGroup variant="outline" disabled={disabled}>
        <Group />
      </ButtonGroup>
      <ButtonGroup variant="text" disabled={disabled}>
        <Group />
      </ButtonGroup>

      <ButtonGroup color="warning" disabled={disabled}>
        <Group />
      </ButtonGroup>
      <ButtonGroup color="info" variant="outline" disabled={disabled}>
        <Group />
      </ButtonGroup>
      <ButtonGroup color="success" variant="text" disabled={disabled}>
        <Group />
      </ButtonGroup>
    </>
  );
}
