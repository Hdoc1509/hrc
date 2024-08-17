import { RingSpinner } from "@hrc/spinner";

export function RingSpinnerSpeeds() {
  return (
    <>
      <RingSpinner color="info" speed="slow" />
      <RingSpinner color="warning" />
      <RingSpinner color="success" speed="fast" />
    </>
  );
}

