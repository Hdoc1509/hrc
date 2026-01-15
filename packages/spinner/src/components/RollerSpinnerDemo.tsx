import { DemoDocs } from "@hrc/docs";
import * as Demos from "../demos";
import { PauseSpinners } from "./PauseSpinners";

export const RollerSpinnerDemo = () => {
  return (
    <DemoDocs componentName="RollerSpinner">
      <DemoDocs layout="row">
        <PauseSpinners />
        <h3>Default</h3>
        <Demos.RollerSpinnerDefault />
      </DemoDocs>
      <DemoDocs layout="row">
        <PauseSpinners />
        <h3>Colors</h3>
        <Demos.RollerSpinnerColors />
      </DemoDocs>
      <DemoDocs layout="row">
        <PauseSpinners />
        <h3>Sizes</h3>
        <Demos.RollerSpinnerSizes />
      </DemoDocs>
      <DemoDocs layout="row">
        <PauseSpinners />
        <h3>Speeds</h3>
        <Demos.RollerSpinnerSpeeds />
      </DemoDocs>
    </DemoDocs>
  );
};
