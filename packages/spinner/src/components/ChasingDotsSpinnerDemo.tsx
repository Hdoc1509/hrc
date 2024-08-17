import { DemoDocs } from "@hrc/docs";
import * as Demos from "../demos";

export const ChasingDotsSpinnerDemo = () => {
  return (
    <DemoDocs componentName="ChasingDotsSpinner">
      <DemoDocs layout="row">
        <h3>Default</h3>
        <Demos.ChasingDotsSpinnerDefault />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Colors</h3>
        <Demos.ChasingDotsSpinnerColors />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Sizes</h3>
        <Demos.ChasingDotsSpinnerSizes />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Speeds</h3>
        <Demos.ChasingDotsSpinnerSpeeds />
      </DemoDocs>
    </DemoDocs>
  );
};
