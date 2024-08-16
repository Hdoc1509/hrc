import { DemoDocs } from "@hrc/docs";
import * as Demos from "../demos";

export const DoubleGrowingSpinnerDemo = () => {
  return (
    <DemoDocs componentName="DoubleGrowingSpinner">
      <DemoDocs layout="row">
        <h3>Default</h3>
        <Demos.DoubleGrowingSpinnerDefault />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Colors</h3>
        <Demos.DoubleGrowingSpinnerColors />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Sizes</h3>
        <Demos.DoubleGrowingSpinnerSizes />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Speeds</h3>
        <Demos.DoubleGrowingSpinnerSpeeds />
      </DemoDocs>
    </DemoDocs>
  );
};
