import { DemoDocs } from "@hrc/docs";
import * as Demos from "../demos";

export const HeartSpinnerDemo = () => {
  return (
    <DemoDocs componentName="HeartSpinner">
      <DemoDocs layout="row">
        <h3>Default</h3>
        <Demos.HeartSpinnerDefault />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Colors</h3>
        <Demos.HeartSpinnerColors />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Sizes</h3>
        <Demos.HeartSpinnerSizes />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Speeds</h3>
        <Demos.HeartSpinnerSpeeds />
      </DemoDocs>
    </DemoDocs>
  );
};
