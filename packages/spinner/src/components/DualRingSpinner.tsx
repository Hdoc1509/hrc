import { DemoDocs } from "@hrc/docs";
import * as Demos from '../demos'

export const DualRingSpinnerDemo = () => {
  return (
    <DemoDocs componentName="DualRingSpinner">
      <DemoDocs layout="row">
        <h3>Default</h3>
        <Demos.DualRingSpinnerDefault />
      </DemoDocs>
      <DemoDocs layout="grid" cols={3}>
        <h3>Colors</h3>
        <Demos.DualRingSpinnerColors />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Sizes</h3>
        <Demos.DualRingSpinnerSizes />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Speeds</h3>
        <Demos.DualRingSpinnerSpeeds />
      </DemoDocs>
    </DemoDocs>
  );
};
