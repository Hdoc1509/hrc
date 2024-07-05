import { Radio } from "@hrc/input";

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
