import { DemoDocs } from "@hrc/docs";
import * as Demos from "../demos";

export const EllipsisSpinnerDemo = () => {
  return (
    <DemoDocs componentName="EllipsisSpinner">
      <DemoDocs layout="row">
        <h3>Default</h3>
        <Demos.EllipsisSpinnerDefault />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Colors</h3>
        <Demos.EllipsisSpinnerColors />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Sizes</h3>
        <Demos.EllipsisSpinnerSizes />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Speeds</h3>
        <Demos.EllipsisSpinnerSpeeds />
      </DemoDocs>
    </DemoDocs>
  );
};
