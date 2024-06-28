import { Textarea } from "@lib/main";

export function TextareaWithError() {
  return (
    <>
      <Textarea
        label="Error"
        placeholder="Hello world"
        helperText="Invalid entry"
        required
        error
      />
      <Textarea
        label="Error (disabled)"
        placeholder="Hello world"
        helperText="Helper text"
        disabled
        error
      />
    </>
  );
}
