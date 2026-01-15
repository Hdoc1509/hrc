import { DemoDocs } from "@hrc/docs";
import * as Demos from "../demos";
import { PauseSpinners } from "./PauseSpinners";

export const BladeSpinnerDemo = () => {
  return (
    <DemoDocs componentName="BladeSpinner">
      <DemoDocs layout="row">
        <PauseSpinners />
        <h3>Default</h3>
        <Demos.BladeSpinnerDefault />
      </DemoDocs>
      <DemoDocs layout="row">
        <PauseSpinners />
        <h3>Colors</h3>
        <Demos.BladeSpinnerColors />
      </DemoDocs>
      <DemoDocs layout="row">
        <PauseSpinners />
        <h3>Sizes</h3>
        <Demos.BladeSpinnerSizes />
      </DemoDocs>
      <DemoDocs layout="row">
        <PauseSpinners />
        <h3>Speeds</h3>
        <Demos.BladeSpinnerSpeeds />
      </DemoDocs>
    </DemoDocs>
  );
};
