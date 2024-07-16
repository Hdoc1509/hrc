import {
  BorderSpinner,
  CircleSpinner,
  DualRingSpinner,
  GrowingSpinner,
  RingSpinner,
} from "@lib/main";

export function PackageDemo() {
  return (
    <>
      <BorderSpinner size="large" color="primary" />
      <CircleSpinner color="error" speed="slow" />
      <DualRingSpinner size="small" />
      <GrowingSpinner color="warning" speed="fast" />
      <RingSpinner size="large" color="success" />
    </>
  );
}
