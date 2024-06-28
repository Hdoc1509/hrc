import { DemoDocs } from "@hrc/docs";
import * as Demos from "../demos";

export const TextareaDemo = () => {
  return (
    <DemoDocs>
      <DemoDocs.TitleComponent name="Textarea" />
      <DemoDocs>
        <h3>Default</h3>
        <Demos.TextareaDefault />
      </DemoDocs>
    </DemoDocs>
  );
};
