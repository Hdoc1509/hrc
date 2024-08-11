import { DemoDocs } from "@hrc/docs";
import * as Demos from "../demos";

export const RippleSpinnerDemo = () => {
  return (
    <DemoDocs componentName="RippleSpinner">
      <DemoDocs layout="row">
        <h3>Default</h3>
        <Demos.RippleSpinnerDefault />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Colors</h3>
        <Demos.RippleSpinnerColors />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Sizes</h3>
        <Demos.RippleSpinnerSizes />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Speeds</h3>
        <Demos.RippleSpinnerSpeeds />
      </DemoDocs>
    </DemoDocs>
  );
};
