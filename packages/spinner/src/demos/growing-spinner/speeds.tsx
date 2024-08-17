import { GrowingSpinner } from "@lib/main";

export function GrowingSpinnerSpeeds() {
  return (
    <>
      <GrowingSpinner color="info" speed="slow" />
      <GrowingSpinner color="warning" />
      <GrowingSpinner color="success" speed="fast" />
    </>
  );
}

