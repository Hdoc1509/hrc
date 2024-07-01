import { Radio } from "@lib/main";

export function RadioSizes() {
  return (
    <>
      <Radio label="Small" name="radio-size" size="small" />
      <Radio label="Default" name="radio-size" defaultChecked />
      <Radio label="Large" name="radio-size" size="large" />
    </>
  );
}
