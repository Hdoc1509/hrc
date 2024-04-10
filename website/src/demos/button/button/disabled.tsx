import { useState } from "react";
import { Button } from "@hrc/button";
import { Icon } from "@hrc/material-icons";

export function ButtonDisabled() {
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

      <Button disabled={disabled} />
      <Button variant="outline" disabled={disabled}>
        Outline
      </Button>
      <Button variant="text" disabled={disabled}>
        Text
      </Button>

      <Button color="warning" disabled={disabled} />
      <Button color="info" variant="outline" disabled={disabled}>
        Outline
      </Button>
      <Button color="success" variant="text" disabled={disabled}>
        Text
      </Button>
    </>
  );
}
