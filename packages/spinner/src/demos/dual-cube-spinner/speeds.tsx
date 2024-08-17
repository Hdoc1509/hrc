import { DualCubeSpinner } from "@lib/main";

export function DualCubeSpinnerSpeeds() {
  return (
    <>
      <DualCubeSpinner color="info" speed="slow" />
      <DualCubeSpinner color="warning" />
      <DualCubeSpinner color="success" speed="fast" />
    </>
  );
}

