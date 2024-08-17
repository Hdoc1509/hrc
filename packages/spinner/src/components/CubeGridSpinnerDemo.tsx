import { DemoDocs } from "@hrc/docs";
import * as Demos from "../demos";

export const CubeGridSpinnerDemo = () => {
  return (
    <DemoDocs componentName="CubeGridSpinner">
      <DemoDocs layout="row">
        <h3>Default</h3>
        <Demos.CubeGridSpinnerDefault />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Colors</h3>
        <Demos.CubeGridSpinnerColors />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Sizes</h3>
        <Demos.CubeGridSpinnerSizes />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Speeds</h3>
        <Demos.CubeGridSpinnerSpeeds />
      </DemoDocs>
    </DemoDocs>
  );
};
