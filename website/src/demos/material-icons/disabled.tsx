import { useState } from "react";
import { Icon } from "@hrc/material-icons";
import { ToggleDisabled } from "./ToggleDisabled";

export function IconDisabled() {
  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <ToggleDisabled disabled={disabled} setter={setDisabled} />

      <Icon name="question_answer" disabled={disabled} />
      <Icon name="question_answer" variant="outlined" disabled={disabled} />
      <Icon name="question_answer" variant="round" disabled={disabled} />

      <Icon name="fingerprint" color="warning" disabled={disabled} />
      <Icon name="fingerprint" color="info" disabled={disabled} />
      <Icon name="fingerprint" color="success" disabled={disabled} />
    </>
  );
}
