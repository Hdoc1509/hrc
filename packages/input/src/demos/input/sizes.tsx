import { Input } from "@lib/main";

export function InputSizes() {
  return (
    <>
      <Input label="Small" placeholder="Hello world" size="small" />
      <Input label="Default" placeholder="Hello world" />
      <Input label="Full width" placeholder="Hello world" fullWidth />
    </>
  );
}
