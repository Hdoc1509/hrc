import { DualRingSpinner, GrowingSpinner, RingSpinner } from "@lib/main";

export function PackageDemo() {
  return (
    <>
      <RingSpinner size="large" color="primary" />
      <DualRingSpinner color="error" />
      <GrowingSpinner />
    </>
  );
}
