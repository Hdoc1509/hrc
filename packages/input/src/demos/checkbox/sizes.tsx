import { Checkbox } from "@lib/main";

export function CheckboxSizes() {
  return (
    <>
      <Checkbox size="small" defaultChecked />
      <Checkbox defaultChecked />
      <Checkbox size="large" defaultChecked />
    </>
  );
}
