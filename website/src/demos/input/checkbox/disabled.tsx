import { useState } from "react";
import { Checkbox } from "@hrc/input";
import { ToggleDisabled } from "./ToggleDisabled"

export function CheckboxDisabled() {
  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <ToggleDisabled disabled={disabled} setter={setDisabled} />

      <Checkbox disabled={disabled} />
      <Checkbox disabled={disabled} defaultChecked />
      <Checkbox label="With label" disabled={disabled} />
      <Checkbox label="With label" disabled={disabled} defaultChecked />
    </>
  );
}
