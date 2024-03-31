import { RingSpinner } from "@lib/main";

export function RingSpinnerSpeeds() {
  return (
    <>
      <RingSpinner color="info" speed="slow" />
      <RingSpinner color="info" />
      <RingSpinner color="info" speed="fast" />
    </>
  );
}

