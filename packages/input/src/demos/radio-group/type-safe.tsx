import { useState } from "react";
import { RadioGroup, type RadioGroupOption } from "@lib/main";

type ActionOption = RadioGroupOption<typeof options>;

const options = [
  { label: "Shut down", value: "shut-down" },
  { label: "Reboot", value: "reboot" },
  { label: "Restart", value: "restart" },
] as const; // just add `as const` to the array

export const RadioGroupTypeSafe = () => {
  // you'll have intellisense for `action`, `setAction` and `useState`
  const [action, setAction] = useState<ActionOption>();

  return (
    <>
      <RadioGroup
        name="radio-group-type-safe-controlled"
        // also you'll have intellisense for `options`, `value` and `onChange`
        options={options}
        value={action}
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
