import { Textarea } from "@hrc/input";

export function TextareaWithError() {
  return (
    <>
      <Textarea
        label="With error"
        placeholder="Hello world"
        helperText="Invalid entry"
        required
        error
      />
      <Textarea
        label="With error (disabled)"
        placeholder="Hello world"
        helperText="Helper text"
        disabled
        error
      />
    </>
  );
}
