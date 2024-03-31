import { DemoDocs } from "@hrc/docs";
import { DualRingSpinner } from "@lib/main";

export const DualRingSpinnerDemo = () => {
  return (
    <DemoDocs>
      <DemoDocs.TitleComponent name="DualRingSpinner" />
      <DemoDocs layout="row">
        <h3>Default</h3>
        <DualRingSpinner />
      </DemoDocs>
      <DemoDocs layout="grid" cols={3}>
        <h3>Colors</h3>
        <DualRingSpinner color="primary" />
        <DualRingSpinner color="secondary" />
        <DualRingSpinner color="error" />
        <DualRingSpinner color="info" />
        <DualRingSpinner color="warning" />
        <DualRingSpinner color="success" />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Sizes</h3>
        <DualRingSpinner color="info" size="small" />
        <DualRingSpinner color="info" />
        <DualRingSpinner color="info" size="large" />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Speeds</h3>
        <DualRingSpinner color="success" speed="slow" />
        <DualRingSpinner color="success" />
        <DualRingSpinner color="success" speed="fast" />
      </DemoDocs>
    </DemoDocs>
  );
};
