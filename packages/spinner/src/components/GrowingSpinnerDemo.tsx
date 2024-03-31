import { DemoDocs } from "@hrc/docs";
import { GrowingSpinner } from "@lib/main";

export const GrowingSpinnerDemo = () => {
  return (
    <DemoDocs>
      <DemoDocs.TitleComponent name="GrowingSpinner" />
      <DemoDocs layout="row">
        <h3>Default</h3>
        <GrowingSpinner />
      </DemoDocs>
      <DemoDocs layout="grid" cols={3}>
        <h3>Colors</h3>
        <GrowingSpinner color="primary" />
        <GrowingSpinner color="secondary" />
        <GrowingSpinner color="error" />
        <GrowingSpinner color="info" />
        <GrowingSpinner color="warning" />
        <GrowingSpinner color="success" />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Sizes</h3>
        <GrowingSpinner color="error" size="small" />
        <GrowingSpinner color="error" />
        <GrowingSpinner color="error" size="large" />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Speeds</h3>
        <GrowingSpinner color="warning" speed="slow" />
        <GrowingSpinner color="warning" />
        <GrowingSpinner color="warning" speed="fast" />
      </DemoDocs>
    </DemoDocs>
  );
};
