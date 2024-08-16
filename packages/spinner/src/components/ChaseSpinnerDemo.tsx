import { DemoDocs } from "@hrc/docs";
import * as Demos from "../demos";

export const ChaseSpinnerDemo = () => {
  return (
    <DemoDocs componentName="ChaseSpinner">
      <DemoDocs layout="row">
        <h3>Default</h3>
        <Demos.ChaseSpinnerDefault />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Colors</h3>
        <Demos.ChaseSpinnerColors />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Sizes</h3>
        <Demos.ChaseSpinnerSizes />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Speeds</h3>
        <Demos.ChaseSpinnerSpeeds />
      </DemoDocs>
    </DemoDocs>
  );
};
