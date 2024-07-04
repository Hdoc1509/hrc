import { useState } from "react";
import { Radio } from "@lib/main";
import { ToggleDisabled } from "./ToggleDisabled";

export function RadioDisabled() {
  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <ToggleDisabled disabled={disabled} setter={setDisabled} />

      <Radio
        label="Write a story"
        name="radio-disabled"
        value="write"
        disabled={disabled}
      />
      <Radio
        label="Read a story"
        name="radio-disabled"
        value="read"
        disabled={disabled}
        defaultChecked
      />
    </>
  );
}
