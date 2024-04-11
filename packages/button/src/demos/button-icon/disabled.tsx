import { useState } from "react";
import { ButtonIcon } from "@lib/main";
import { Icon } from "@hrc/material-icons";
import { ToggleDisabled } from "@hrc/docs";

export function ButtonIconDisabled() {
  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <ToggleDisabled disabled={disabled} setter={setDisabled} />

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
