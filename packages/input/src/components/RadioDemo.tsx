import { DemoDocs } from "@hrc/docs";
import * as Demos from "../demos";

export const RadioDemo = () => {
  return (
    <DemoDocs componentName="Radio">
      <DemoDocs>
        <h3>Default</h3>
        <Demos.RadioDefault />
      </DemoDocs>
      <DemoDocs layout="grid" cols={2}>
        <h3>Colors</h3>
        <Demos.RadioColors />
      </DemoDocs>
      <DemoDocs>
        <h3>Disabled</h3>
        <Demos.RadioDisabled />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Sizes</h3>
        <Demos.RadioSizes />
      </DemoDocs>
    </DemoDocs>
  );
};
