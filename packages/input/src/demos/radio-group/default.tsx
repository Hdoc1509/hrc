import { RadioGroup } from "@lib/main";

export const RadioGroupDefault = () => {
  return (
    <>
      <RadioGroup
        name="radio-group-default"
        options={[
          { label: "Write a story", value: "write" },
          { label: "Read a story", value: "read" },
          { label: "Listen a story", value: "listen" },
        ]}
        defaultValue="read"
      />
      <RadioGroup
        name="radio-group-2-default"
        options={[
          { label: "Use Windows", value: "windows" },
          { label: "Use Mac", value: "mac" },
          { label: "Use Linux", value: "linux" },
        ]}
      />
    </>
  );
};
