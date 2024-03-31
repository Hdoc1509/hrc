import { DemoDocs } from "@hrc/docs";
import * as Demos from '../demos'

export const RingSpinnerDemo = () => {
  return (
    <DemoDocs>
      <DemoDocs.TitleComponent name="RingSpinner" />
      <DemoDocs layout="row">
        <h3>Default</h3>
        <Demos.RingSpinnerDefault />
      </DemoDocs>
      <DemoDocs layout="grid" cols={3}>
        <h3>Colors</h3>
        <Demos.RingSpinnerColors />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Sizes</h3>
        <Demos.RingSpinnerSizes />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Speeds</h3>
        <Demos.RingSpinnerSpeeds />
      </DemoDocs>
    </DemoDocs>
  );
};
