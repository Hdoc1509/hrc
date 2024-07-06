import { RadioGroup } from "@hrc/input";

export const RadioGroupDefault = () => {
  return (
    <RadioGroup
      name="radio-group-default"
      options={[
        { label: "Write a story", value: "write" },
        { label: "Read a story", value: "read" },
        { label: "Listen a story", value: "listen" },
      ]}
      defaultValue="read"
    />
  );
};
