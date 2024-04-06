import { RingSpinner } from "@hrc/spinner";

export function RingSpinnerSpeeds() {
  return (
    <>
      <RingSpinner color="info" speed="slow" />
      <RingSpinner color="info" />
      <RingSpinner color="info" speed="fast" />
    </>
  );
}

