import { Checkbox } from "@hrc/input";

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
