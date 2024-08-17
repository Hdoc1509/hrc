import { DemoDocs } from "@hrc/docs";
import * as Demos from "../demos";

export const DualCubeSpinnerDemo = () => {
  return (
    <DemoDocs componentName="DualCubeSpinner">
      <DemoDocs layout="row">
        <h3>Default</h3>
        <Demos.DualCubeSpinnerDefault />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Colors</h3>
        <Demos.DualCubeSpinnerColors />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Sizes</h3>
        <Demos.DualCubeSpinnerSizes />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Speeds</h3>
        <Demos.DualCubeSpinnerSpeeds />
      </DemoDocs>
    </DemoDocs>
  );
};
