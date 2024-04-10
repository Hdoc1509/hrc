import { useState } from "react";
import { Button, ButtonIcon } from "@hrc/button";
import { Icon } from "@hrc/material-icons";

export function ButtonIconDisabled() {
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

      <ButtonIcon disabled={disabled}>
        <Icon name="list" />
      </ButtonIcon>
      <ButtonIcon variant="outline" disabled={disabled}>
        <Icon name="list" />
      </ButtonIcon>
      <ButtonIcon variant="text" disabled={disabled}>
        <Icon name="list" />
      </ButtonIcon>

      <ButtonIcon color="warning" disabled={disabled}>
        <Icon name="music_note" />
      </ButtonIcon>
      <ButtonIcon color="info" variant="outline" disabled={disabled}>
        <Icon name="music_note" />
      </ButtonIcon>
      <ButtonIcon color="success" variant="text" disabled={disabled}>
        <Icon name="music_note" />
      </ButtonIcon>
    </>
  );
}
