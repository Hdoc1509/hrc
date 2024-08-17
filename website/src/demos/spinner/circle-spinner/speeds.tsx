import { CircleSpinner } from "@hrc/spinner";

export function CircleSpinnerSpeeds() {
  return (
    <>
      <CircleSpinner color="info" speed="slow" />
      <CircleSpinner color="warning" />
      <CircleSpinner color="success" speed="fast" />
    </>
  );
}
