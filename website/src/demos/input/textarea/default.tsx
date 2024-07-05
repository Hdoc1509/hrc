import { Textarea } from "@hrc/input";

export function TextareaDefault() {
  return (
    <>
      <Textarea placeholder="Hello world" />
      <Textarea label="With label" placeholder="Hello world" />
      <Textarea label="Required" placeholder="Hello world" required />
    </>
  );
}
