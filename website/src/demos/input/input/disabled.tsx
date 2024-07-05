import { useState } from "react";
import { Input } from "@hrc/input";
import { ToggleDisabled } from "./ToggleDisabled";

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
