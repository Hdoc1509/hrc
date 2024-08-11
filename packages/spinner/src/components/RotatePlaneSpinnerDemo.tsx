import { DemoDocs } from "@hrc/docs";
import * as Demos from "../demos";

export const RotatePlaneSpinnerDemo = () => {
  return (
    <DemoDocs componentName="RotatePlaneSpinner">
      <DemoDocs layout="row">
        <h3>Default</h3>
        <Demos.RotatePlaneSpinnerDefault />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Colors</h3>
        <Demos.RotatePlaneSpinnerColors />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Sizes</h3>
        <Demos.RotatePlaneSpinnerSizes />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Speeds</h3>
        <Demos.RotatePlaneSpinnerSpeeds />
      </DemoDocs>
    </DemoDocs>
  );
};
