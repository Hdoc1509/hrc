import { Input } from "@lib/main";

export function InputWithHelperText() {
  return (
    <>
      <Input size="small" placeholder="Hello world" helperText="Helper text" />
      <Input placeholder="Hello world" helperText="Helper text" />
    </>
  );
}
