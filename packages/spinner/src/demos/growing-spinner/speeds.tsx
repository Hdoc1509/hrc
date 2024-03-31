import { GrowingSpinner } from "@lib/main";

export function GrowingSpinnerSpeeds() {
  return (
    <>
      <GrowingSpinner color="secondary" speed="slow" />
      <GrowingSpinner color="secondary" />
      <GrowingSpinner color="secondary" speed="fast" />
    </>
  );
}

