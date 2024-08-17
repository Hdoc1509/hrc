import { CubeGridSpinner } from "@hrc/spinner";

export function CubeGridSpinnerSpeeds() {
  return (
    <>
      <CubeGridSpinner color="info" speed="slow" />
      <CubeGridSpinner color="warning" />
      <CubeGridSpinner color="success" speed="fast" />
    </>
  );
}
