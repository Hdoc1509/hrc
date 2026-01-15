import { DemoDocs } from "@hrc/docs";
import * as Demos from "../demos";
import { PauseSpinners } from "./PauseSpinners";

export const BarsBounceSpinnerDemo = () => {
  return (
    <DemoDocs componentName="BarsBounceSpinner">
      <DemoDocs layout="row">
        <PauseSpinners />
        <h3>Default</h3>
        <Demos.BarsBounceSpinnerDefault />
      </DemoDocs>
      <DemoDocs layout="row">
        <PauseSpinners />
        <h3>Colors</h3>
        <Demos.BarsBounceSpinnerColors />
      </DemoDocs>
      <DemoDocs layout="row">
        <PauseSpinners />
        <h3>Sizes</h3>
        <Demos.BarsBounceSpinnerSizes />
      </DemoDocs>
      <DemoDocs layout="row">
        <PauseSpinners />
        <h3>Speeds</h3>
        <Demos.BarsBounceSpinnerSpeeds />
      </DemoDocs>
    </DemoDocs>
  );
};
