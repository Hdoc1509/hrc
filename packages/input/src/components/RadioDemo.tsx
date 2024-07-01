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
    </DemoDocs>
  );
};
