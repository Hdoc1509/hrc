import { useState } from "react";
import { RadioGroup } from "@hrc/input";
import { ToggleDisabled } from "./ToggleDisabled";

export function RadioGroupDisabled() {
  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <ToggleDisabled disabled={disabled} setter={setDisabled} />

      <RadioGroup
        name="radio-group-disabled"
        options={[
          { label: "Option 1", value: "option-1" },
          { label: "Option 2", value: "option-2" },
        ]}
        defaultValue="option-1"
        disabled={disabled}
      />
    </>
  );
}
