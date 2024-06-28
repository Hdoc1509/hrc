import { Checkbox } from "@lib/main";

export function CheckboxDefault() {
  return (
    <>
      <Checkbox />
      <Checkbox defaultChecked />
      <Checkbox label="Hello world" />
      <Checkbox label="Hello world" defaultChecked />
    </>
  );
}
