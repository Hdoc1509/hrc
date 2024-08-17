import { CircleSpinner } from "@lib/main";

export function CircleSpinnerSpeeds() {
  return (
    <>
      <CircleSpinner color="info" speed="slow" />
      <CircleSpinner color="warning" />
      <CircleSpinner color="success" speed="fast" />
    </>
  );
}
