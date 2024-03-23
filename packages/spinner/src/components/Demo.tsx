import { DemoDocs } from "@hrc/docs";
import { DualRingSpinner, GrowingSpinner, RingSpinner } from "@lib/main";

export const Demo = () => {
  return (
    <>
      <DemoDocs layout="row">
        <h2>Docs Demo</h2>
        <RingSpinner size="large" color="primary" />
        <DualRingSpinner color="error" />
        <GrowingSpinner />
      </DemoDocs>
    </>
  );
};
