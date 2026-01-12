import { Input } from "@hrc/input";
import { MagnifierIcon } from "../Icons";

export function InputShowcase() {
  return (
    <div className="input-showcase">
      <Input iconStart={<MagnifierIcon />} placeholder="Search..." fullWidth />
    </div>
  );
}
