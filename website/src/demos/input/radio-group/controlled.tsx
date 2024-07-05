import { useState } from "react";
import { RadioGroup } from "@hrc/input";

export const RadioGroupControlled = () => {
  const [value, setValue] = useState("shut-down");

  return (
    <RadioGroup
      name="radio-group-controlled"
      options={[
        { label: "Shut down", value: "shut-down" },
        { label: "Reboot", value: "reboot" },
        { label: "Restart", value: "restart" },
      ]}
      value={value}
      onChange={setValue}
    />
  );
};
