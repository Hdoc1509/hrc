import { ToggleDisabled } from "@hrc/docs";
import { Textarea } from "@lib/main";
import { useState } from "react";

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
