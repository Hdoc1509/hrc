import { GrowingSpinner } from "@hrc/spinner";

export function GrowingSpinnerSpeeds() {
  return (
    <>
      <GrowingSpinner color="secondary" speed="slow" />
      <GrowingSpinner color="secondary" />
      <GrowingSpinner color="secondary" speed="fast" />
    </>
  );
}

