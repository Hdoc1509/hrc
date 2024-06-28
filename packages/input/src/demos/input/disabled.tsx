import { ToggleDisabled } from "@hrc/docs";
import { Input } from "@lib/main";
import { useState } from "react";

export function InputDisabled() {
  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <ToggleDisabled disabled={disabled} setter={setDisabled} />

      <Input placeholder="Hello world" disabled={disabled} />
      <Input label="With label" placeholder="Hello world" disabled={disabled} />
    </>
  );
}
