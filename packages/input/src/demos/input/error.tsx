import { Input } from "@lib/main";
import { Icon } from "@hrc/material-icons";

export function InputWithError() {
  return (
    <>
      <Input
        label="Error"
        placeholder="Hello world"
        helperText="Helper text"
        required
        error
      />
      <Input
        label="Error"
        placeholder="Hello world"
        helperText="Invalid entry"
        iconStart={<Icon name="description" />}
        error
      />
      <Input
        label="Error"
        placeholder="Hello world"
        helperText="Invalid entry"
        iconEnd={<Icon name="description" disabled />}
        disabled
        error
      />
    </>
  );
}
