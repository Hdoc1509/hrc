import { DemoDocs } from "@hrc/docs";
import * as Demos from "../demos";

export const BarsBounce2SpinnerDemo = () => {
  return (
    <DemoDocs componentName="BarsBounce2Spinner">
      <DemoDocs layout="row">
        <h3>Default</h3>
        <Demos.BarsBounce2SpinnerDefault />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Colors</h3>
        <Demos.BarsBounce2SpinnerColors />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Sizes</h3>
        <Demos.BarsBounce2SpinnerSizes />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Speeds</h3>
        <Demos.BarsBounce2SpinnerSpeeds />
      </DemoDocs>
    </DemoDocs>
  );
};
