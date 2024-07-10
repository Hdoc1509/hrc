import { useState } from "react";
import { Button } from "@hrc/button";
import { ToggleDisabled } from "./ToggleDisabled";

export function ButtonDisabled() {
  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <ToggleDisabled disabled={disabled} setter={setDisabled} />

      <Button disabled={disabled}>Default</Button>
      <Button variant="outline" disabled={disabled}>
        Outline
      </Button>
      <Button variant="text" disabled={disabled}>
        Text
      </Button>

      <Button color="warning" disabled={disabled}>
        Warning
      </Button>
      <Button color="info" variant="outline" disabled={disabled}>
        Info
      </Button>
      <Button color="success" variant="text" disabled={disabled}>
        Success
      </Button>
    </>
  );
}
