import { DemoDocs } from "@hrc/docs";
import * as Demos from "../demos";

export const InputDemo = () => {
  return (
    <DemoDocs>
      <DemoDocs.TitleComponent name="Input" />
      <DemoDocs>
        <h3>Default</h3>
        <Demos.InputDefault />
      </DemoDocs>
    </DemoDocs>
  );
};
