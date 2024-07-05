import { Radio } from "@lib/main";

export function RadioSizes() {
  return (
    <>
      <Radio label="Small" name="radio-size" value="small" size="small" />
      <Radio label="Default" name="radio-size" value="default" defaultChecked />
      <Radio label="Large" name="radio-size" value="large" size="large" />
    </>
  );
}
