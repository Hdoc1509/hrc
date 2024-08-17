import { GrowingSpinner } from "@hrc/spinner";

export function GrowingSpinnerSpeeds() {
  return (
    <>
      <GrowingSpinner color="info" speed="slow" />
      <GrowingSpinner color="warning" />
      <GrowingSpinner color="success" speed="fast" />
    </>
  );
}

