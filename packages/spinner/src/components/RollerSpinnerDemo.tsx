import { DemoDocs } from "@hrc/docs";
import * as Demos from "../demos";

export const RollerSpinnerDemo = () => {
  return (
    <DemoDocs componentName="RollerSpinner">
      <DemoDocs layout="row">
        <h3>Default</h3>
        <Demos.RollerSpinnerDefault />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Colors</h3>
        <Demos.RollerSpinnerColors />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Sizes</h3>
        <Demos.RollerSpinnerSizes />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Speeds</h3>
        <Demos.RollerSpinnerSpeeds />
      </DemoDocs>
    </DemoDocs>
  );
};
