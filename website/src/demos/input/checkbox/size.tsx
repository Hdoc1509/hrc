import { Checkbox } from "@hrc/input";

export function CheckboxSizes() {
  return (
    <>
      <Checkbox size="small" />
      <Checkbox />
      <Checkbox size="large" />
      <Checkbox size="small" defaultChecked />
      <Checkbox defaultChecked />
      <Checkbox size="large" defaultChecked />
    </>
  );
}
