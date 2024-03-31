import { DualRingSpinner } from "@lib/main";

export function DualRingSpinnerSpeeds() {
  return (
    <>
      <DualRingSpinner color="success" speed="slow" />
      <DualRingSpinner color="success" />
      <DualRingSpinner color="success" speed="fast" />
    </>
  );
}

