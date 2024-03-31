import { DemoDocs } from "@hrc/docs";
import * as Demos from "../demos";

export const GrowingSpinnerDemo = () => {
  return (
    <DemoDocs>
      <DemoDocs.TitleComponent name="GrowingSpinner" />
      <DemoDocs layout="row">
        <h3>Default</h3>
        <Demos.GrowingSpinnerDefault />
      </DemoDocs>
      <DemoDocs layout="grid" cols={3}>
        <h3>Colors</h3>
        <Demos.GrowingSpinnerColors />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Sizes</h3>
        <Demos.GrowingSpinnerSizes />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Speeds</h3>
        <Demos.GrowingSpinnerSpeeds />
      </DemoDocs>
    </DemoDocs>
  );
};
