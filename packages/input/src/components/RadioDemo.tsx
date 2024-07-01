import { DemoDocs } from "@hrc/docs";
import * as Demos from "../demos";

export const RadioDemo = () => {
  return (
    <DemoDocs>
      <DemoDocs.TitleComponent name="Radio" />
      <DemoDocs layout="grid" cols={2} className="radio-default">
        <h3>Default</h3>
        <Demos.RadioDefault />
      </DemoDocs>
      <DemoDocs layout="grid" cols={2}>
        <h3>Colors</h3>
        <Demos.RadioColors />
      </DemoDocs>
      <DemoDocs layout="grid" cols={2} className="radio-disabled">
        <h3>Disabled</h3>
        <Demos.RadioDisabled />
      </DemoDocs>
    </DemoDocs>
  );
};
