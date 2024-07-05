import { Input, Textarea, Checkbox } from "@hrc/input";
import { Icon } from "@hrc/material-icons";

export function PackageDemo() {
  return (
    <>
      <Input
        label="Username"
        placeholder="John Doe"
        iconStart={<Icon name="people" />}
      />
      <Textarea label="Comment" placeholder="Hello world" />
      <Checkbox label="Receive notifications" color="info" defaultChecked />
    </>
  );
}
