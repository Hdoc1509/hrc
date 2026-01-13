import { Checkbox, Input } from "@hrc/input";
import { MagnifierIcon } from "../Icons";

export function InputShowcase() {
  return (
    <div className="input-showcase">
      <Input iconStart={<MagnifierIcon />} placeholder="Search..." fullWidth />
      <Checkbox label="Awesome" color="success" />
    </div>
  );
}
