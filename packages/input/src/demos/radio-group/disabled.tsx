import { useState } from "react";
import { RadioGroup } from "@lib/main";
import { ToggleDisabled } from "./ToggleDisabled";

const options = [
  { label: "Option 1", value: "option-1" },
  { label: "Option 2", value: "option-2" },
] as const;

export function RadioGroupDisabled() {
  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <ToggleDisabled disabled={disabled} setter={setDisabled} />

      <RadioGroup
        name="radio-group-disabled"
        options={options}
        defaultValue="option-1"
        disabled={disabled}
      />
    </>
  );
}
