import { DemoDocs } from "@hrc/docs";
import * as Demos from "../demos";

export const CircleSpinnerDemo = () => {
  return (
    <DemoDocs componentName="CircleSpinner">
      <DemoDocs layout="row">
        <h3>Default</h3>
        <Demos.CircleSpinnerDefault />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Colors</h3>
        <Demos.CircleSpinnerColors />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Sizes</h3>
        <Demos.CircleSpinnerSizes />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Speeds</h3>
        <Demos.CircleSpinnerSpeeds />
      </DemoDocs>
    </DemoDocs>
  );
};
