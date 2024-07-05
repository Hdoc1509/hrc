import { useState } from "react";
import { RadioGroup, type RadioGroupOption } from "@hrc/input";

const options = [
  { label: "Shut down", value: "shut-down" },
  { label: "Reboot", value: "reboot" },
  { label: "Restart", value: "restart" },
] as const; // enable strict type checking with `as const`
// extract option values by using `RadioGroupOption`
type ActionOption = RadioGroupOption<typeof options>;

export const RadioGroupTypeSafe = () => {
  // you'll have intellisense for `action`, `setAction` and `useState`
  const [action, setAction] = useState<ActionOption>();

  return (
    <>
      <RadioGroup
        name="radio-group-type-safe-controlled"
        options={options}
        value={action}
        // also you'll have type checking for `onChange`
        onChange={setAction}
      />
      <RadioGroup
        name="radio-group-type-safe-uncontrolled"
        options={options}
        // even you'll have intellisense for `defaultValue`
        defaultValue="reboot"
      />
    </>
  );
};
