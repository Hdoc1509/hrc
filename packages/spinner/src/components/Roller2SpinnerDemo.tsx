import { DemoDocs } from "@hrc/docs";
import * as Demos from "../demos";

export const Roller2SpinnerDemo = () => {
  return (
    <DemoDocs componentName="Roller2Spinner">
      <DemoDocs layout="row">
        <h3>Default</h3>
        <Demos.Roller2SpinnerDefault />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Colors</h3>
        <Demos.Roller2SpinnerColors />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Sizes</h3>
        <Demos.Roller2SpinnerSizes />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Speeds</h3>
        <Demos.Roller2SpinnerSpeeds />
      </DemoDocs>
    </DemoDocs>
  );
};
