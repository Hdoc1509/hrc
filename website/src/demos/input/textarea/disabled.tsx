import { useState } from "react";
import { Textarea } from "@hrc/input";
import { ToggleDisabled } from "./ToggleDisabled";

export function TextareaDisabled() {
  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <ToggleDisabled disabled={disabled} setter={setDisabled} />

      <Textarea placeholder="Hello world" disabled={disabled} />
      <Textarea
        label="With label"
        placeholder="Hello world"
        disabled={disabled}
      />
    </>
  );
}
