import { Radio } from "@lib/main";

export function RadioDefault() {
  return (
    <>
      <Radio label="Write a story" name="story-action" />
      <Radio label="Read a story" name="story-action" defaultChecked />
    </>
  );
}
