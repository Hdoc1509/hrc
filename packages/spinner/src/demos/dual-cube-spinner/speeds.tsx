import { DualCubeSpinner } from "@lib/main";

export function DualCubeSpinnerSpeeds() {
  return (
    <>
      <DualCubeSpinner color="success" speed="slow" />
      <DualCubeSpinner color="success" />
      <DualCubeSpinner color="success" speed="fast" />
    </>
  );
}

