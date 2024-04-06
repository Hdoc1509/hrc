import { DualRingSpinner, GrowingSpinner, RingSpinner } from "@hrc/spinner";

export function PackageDemo() {
  return (
    <>
      <RingSpinner size="large" color="primary" />
      <DualRingSpinner color="error" />
      <GrowingSpinner />
    </>
  );
}
