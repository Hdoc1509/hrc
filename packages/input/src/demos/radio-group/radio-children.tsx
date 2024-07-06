import { useState } from "react";
import { RadioGroup, Radio, type RadioGroupOption } from "@lib/main";

const NAMES = {
  CONTROLLED: "radio-group-children-controlled",
  UNCONTROLLED: "radio-group-children-uncontrolled",
};
// with a HashMap, you ensure using
// the correct value for `<Radio />` childrens
const ACTIONS = {
  SHUT_DOWN: "shut-down",
  REBOOT: "reboot",
  RESTART: "restart",
} as const; // enable strict type checking with `as const`
// you can also use `RadioGroupOption` with a HashMap
type ActionOption = RadioGroupOption<typeof ACTIONS>;

export const RadioGroupRadioChildren = () => {
  const [action, setAction] = useState<ActionOption>();

  return (
    <>
      <p><strong>Controlled</strong></p>
      <RadioGroup name={NAMES.CONTROLLED} value={action} onChange={setAction}>
        <Radio label="Shut down" value={ACTIONS.SHUT_DOWN} />
        <Radio label="Reboot" value={ACTIONS.REBOOT} />
        <Radio label="Restart" value={ACTIONS.RESTART} />
      </RadioGroup>
      <p><strong>Uncontrolled</strong></p>
      <RadioGroup name={NAMES.UNCONTROLLED} defaultValue={ACTIONS.REBOOT}>
        <Radio label="Shut down" value={ACTIONS.SHUT_DOWN} />
        <Radio label="Reboot" value={ACTIONS.REBOOT} />
        <Radio label="Restart" value={ACTIONS.RESTART} />
      </RadioGroup>
    </>
  );
};
