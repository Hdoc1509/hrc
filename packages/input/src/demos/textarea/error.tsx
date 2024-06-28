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
        label="Error and Disabled"
        placeholder="Hello world"
        helperText="Helper text"
        disabled
        error
      />
    </>
  );
}
