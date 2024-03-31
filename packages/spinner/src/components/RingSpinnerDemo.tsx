import { DemoDocs } from "@hrc/docs";
import { RingSpinner } from "@lib/main";

export const RingSpinnerDemo = () => {
  return (
    <DemoDocs>
      <DemoDocs.TitleComponent name="RingSpinner" />
      <DemoDocs layout="row">
        <h3>Default</h3>
        <RingSpinner />
      </DemoDocs>
      <DemoDocs layout="grid" cols={3}>
        <h3>Colors</h3>
        <RingSpinner color="primary" />
        <RingSpinner color="secondary" />
        <RingSpinner color="error" />
        <RingSpinner color="info" />
        <RingSpinner color="warning" />
        <RingSpinner color="success" />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Sizes</h3>
        <RingSpinner color="primary" size="small" />
        <RingSpinner color="primary" />
        <RingSpinner color="primary" size="large" />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Speeds</h3>
        <RingSpinner color="secondary" speed="slow" />
        <RingSpinner color="secondary" />
        <RingSpinner color="secondary" speed="fast" />
      </DemoDocs>
    </DemoDocs>
  );
};
