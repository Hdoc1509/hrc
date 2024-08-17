import { DualCubeSpinner } from "@hrc/spinner";

export function DualCubeSpinnerSpeeds() {
  return (
    <>
      <DualCubeSpinner color="info" speed="slow" />
      <DualCubeSpinner color="warning" />
      <DualCubeSpinner color="success" speed="fast" />
    </>
  );
}

