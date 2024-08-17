import {
  BarsBounce2Spinner,
  BarsBounceSpinner,
  BarsWaveSpinner,
  BladeSpinner,
  BorderSpinner,
  ChaseSpinner,
  ChasingDotsSpinner,
  CircleSpinner,
  CubeGridSpinner,
  DoubleGrowingSpinner,
  DualCubeSpinner,
  DualRingSpinner,
  EllipsisSpinner,
  GrowingEllipsisSpinner,
  GrowingSpinner,
  HeartSpinner,
  RingSpinner,
  RippleSpinner,
  Roller2Spinner,
  RollerSpinner,
  RotatePlaneSpinner,
} from "@hrc/spinner";

export function PackageDemo() {
  return (
    <>
      <BarsBounceSpinner size="large" />
      <BarsBounce2Spinner color="primary" />
      <BarsWaveSpinner color="secondary" size="small" />
      <BladeSpinner color="error" speed="fast" />
      <BorderSpinner color="info" />
      <ChaseSpinner color="warning" speed="slow" />
      <ChasingDotsSpinner color="success" size="large" />
      <CircleSpinner />
      <CubeGridSpinner color="primary" size="small" />
      <DoubleGrowingSpinner color="secondary" speed="fast" />
      <DualCubeSpinner color="error" />
      <DualRingSpinner color="info" speed="slow" />
      <EllipsisSpinner color="warning" size="large" />
      <GrowingEllipsisSpinner color="success" />
      <GrowingSpinner size="small" />
      <HeartSpinner color="primary" speed="fast" />
      <RingSpinner color="secondary" />
      <RippleSpinner color="error" speed="slow" />
      <RollerSpinner color="info" size="large" />
      <Roller2Spinner color="warning" />
      <RotatePlaneSpinner color="success" size="small" />
    </>
  );
}
