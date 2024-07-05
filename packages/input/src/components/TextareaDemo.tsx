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
      <DemoDocs>
        <h3>Colors</h3>
        <Demos.TextareaColors />
      </DemoDocs>
      <DemoDocs>
        <h3>Autosize</h3>
        <Demos.TextareaAutosize />
      </DemoDocs>
      <DemoDocs>
        <h3>Disabled</h3>
        <Demos.TextareaDisabled />
      </DemoDocs>
      <DemoDocs>
        <h3>With Helper Text</h3>
        <Demos.TextareaWithHelperText />
      </DemoDocs>
      <DemoDocs>
        <h3>With Error</h3>
        <Demos.TextareaWithError />
      </DemoDocs>
    </DemoDocs>
  );
};
