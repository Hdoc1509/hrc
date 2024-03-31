import { DemoDocs } from "@hrc/docs";
import * as Demos from "../demos";

export const BorderSpinnerDemo = () => {
  return (
    <DemoDocs>
      <DemoDocs.TitleComponent name="BorderSpinner" />
      <DemoDocs layout="row">
        <h3>Default</h3>
        <Demos.BorderSpinnerDefault />
      </DemoDocs>
      <DemoDocs layout="grid" cols={3}>
        <h3>Colors</h3>
        <Demos.BorderSpinnerColors />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Sizes</h3>
        <Demos.BorderSpinnerSizes />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Speeds</h3>
        <Demos.BorderSpinnerSpeeds />
      </DemoDocs>
    </DemoDocs>
  );
};
