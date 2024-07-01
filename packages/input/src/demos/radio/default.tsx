import { Radio } from "@lib/main";

export function RadioDefault() {
  return (
    <>
      <Radio label="Write a story" name="radio-default" />
      <Radio label="Read a story" name="radio-default" defaultChecked />
    </>
  );
}
