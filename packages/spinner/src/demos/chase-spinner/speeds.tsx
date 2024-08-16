import { ChaseSpinner } from "@lib/main";

export function ChaseSpinnerSpeeds() {
  return (
    <>
      <ChaseSpinner color="info" speed="slow" />
      <ChaseSpinner color="info" />
      <ChaseSpinner color="info" speed="fast" />
    </>
  );
}
