import { Input } from "@lib/main";
import { Icon } from "@hrc/material-icons";

export function InputWithIcons() {
  return (
    <>
      <Input
        label="Icon start"
        iconStart={<Icon name="people" />}
        placeholder="Hello world"
      />
      <Input
        label="Icon end"
        iconEnd={<Icon name="phone" />}
        placeholder="Hello world"
      />
    </>
  );
}
