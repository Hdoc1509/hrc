import { DualRingSpinner } from "@hrc/spinner";

export function DualRingSpinnerSizes() {
  return (
    <>
      <DualRingSpinner color="primary" size="small" />
      <DualRingSpinner color="secondary" />
      <DualRingSpinner color="error" size="large" />
    </>
  );
}

