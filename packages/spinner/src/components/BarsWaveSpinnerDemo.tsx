import { DemoDocs } from "@hrc/docs";
import * as Demos from "../demos";
import { PauseSpinners } from "./PauseSpinners";

export const BarsWaveSpinnerDemo = () => {
  return (
    <DemoDocs componentName="BarsWaveSpinner">
      <DemoDocs layout="row">
        <PauseSpinners />
        <h3>Default</h3>
        <Demos.BarsWaveSpinnerDefault />
      </DemoDocs>
      <DemoDocs layout="row">
        <PauseSpinners />
        <h3>Colors</h3>
        <Demos.BarsWaveSpinnerColors />
      </DemoDocs>
      <DemoDocs layout="row">
        <PauseSpinners />
        <h3>Sizes</h3>
        <Demos.BarsWaveSpinnerSizes />
      </DemoDocs>
      <DemoDocs layout="row">
        <PauseSpinners />
        <h3>Speeds</h3>
        <Demos.BarsWaveSpinnerSpeeds />
      </DemoDocs>
    </DemoDocs>
  );
};
