import { CircleSpinner } from "@hrc/spinner";

export function CircleSpinnerSpeeds() {
  return (
    <>
      <CircleSpinner color="info" speed="slow" />
      <CircleSpinner color="info" />
      <CircleSpinner color="info" speed="fast" />
    </>
  );
}
