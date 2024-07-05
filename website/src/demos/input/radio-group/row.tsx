import { RadioGroup } from "@hrc/input";

export function RadioGroupRow() {
  return (
    <RadioGroup
      name="radio-group-row"
      options={[
        { label: "Option 1", value: "option-1" },
        { label: "Option 2", value: "option-2" },
        { label: "Option 3", value: "option-3" },
      ]}
      defaultValue="option-1"
      row
    />
  );
}
