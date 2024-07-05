import { Input } from "@hrc/input";

export function InputDefault() {
  return (
    <>
      <Input placeholder="Hello world" />
      <Input label="With label" placeholder="Hello world" />
      <Input label="Required" placeholder="Hello world" required />
    </>
  );
}
