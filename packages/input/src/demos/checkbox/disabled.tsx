import { useState } from "react";
import { Checkbox } from "@lib/main";
import { ToggleDisabled } from "@hrc/docs";

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
