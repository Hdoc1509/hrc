import { Radio } from "@lib/main";

export function RadioDefault() {
  return (
    <>
      <Radio label="Write a story" name="radio-default" value="write" />
      <Radio
        label="Read a story"
        name="radio-default"
        value="read"
        defaultChecked
      />
    </>
  );
}
