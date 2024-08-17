import { DualRingSpinner } from "@hrc/spinner";

export function DualRingSpinnerSpeeds() {
  return (
    <>
      <DualRingSpinner color="info" speed="slow" />
      <DualRingSpinner color="warning" />
      <DualRingSpinner color="success" speed="fast" />
    </>
  );
}

