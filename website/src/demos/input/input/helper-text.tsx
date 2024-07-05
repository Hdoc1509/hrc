import { Input } from "@hrc/input";

export function InputWithHelperText() {
  return (
    <>
      <Input size="small" placeholder="Hello world" helperText="Helper text" />
      <Input placeholder="Hello world" helperText="Helper text" />
    </>
  );
}
