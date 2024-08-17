import {
  BarsBounce2Spinner,
  BarsBounceSpinner,
  BarsWaveSpinner,
  BladeSpinner,
  BorderSpinner,
  ChaseSpinner,
  ChasingDotsSpinner,
  CircleSpinner,
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
} from "@lib/main";

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
      <DoubleGrowingSpinner color="primary" size="small" />
      <DualCubeSpinner color="secondary" speed="fast" />
      <DualRingSpinner color="error" />
      <EllipsisSpinner color="info" speed="slow" />
      <GrowingEllipsisSpinner color="warning" size="large" />
      <GrowingSpinner color="success" />
      <HeartSpinner size="small" />
      <RingSpinner color="primary" speed="fast" />
      <RippleSpinner color="secondary" />
      <RollerSpinner color="error" speed="slow" />
      <Roller2Spinner color="info" size="large" />
      <RotatePlaneSpinner color="warning" />
    </>
  );
}
