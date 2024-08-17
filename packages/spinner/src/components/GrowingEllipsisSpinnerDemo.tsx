import { DemoDocs } from "@hrc/docs";
import * as Demos from "../demos";

export const GrowingEllipsisSpinnerDemo = () => {
  return (
    <DemoDocs componentName="GrowingEllipsisSpinner">
      <DemoDocs layout="row">
        <h3>Default</h3>
        <Demos.GrowingEllipsisSpinnerDefault />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Colors</h3>
        <Demos.GrowingEllipsisSpinnerColors />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Sizes</h3>
        <Demos.GrowingEllipsisSpinnerSizes />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Speeds</h3>
        <Demos.GrowingEllipsisSpinnerSpeeds />
      </DemoDocs>
    </DemoDocs>
  );
};
