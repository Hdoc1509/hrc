import {
  BarsBounceSpinner,
  BladeSpinner,
  ChaseSpinner,
  CubeGridSpinner,
  DualCubeSpinner,
  GrowingEllipsisSpinner,
  RippleSpinner,
} from "@lib/main";

export function PackageDemo() {
  return (
    <>
      <BarsBounceSpinner size="large" />
      <BladeSpinner color="primary" />
      <ChaseSpinner color="secondary" size="small" />
      <CubeGridSpinner color="error" speed="fast" />
      <DualCubeSpinner color="info" />
      <GrowingEllipsisSpinner color="warning" speed="slow" />
      <RippleSpinner color="success" size="large" />
    </>
  );
}
