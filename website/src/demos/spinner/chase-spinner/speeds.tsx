import { ChaseSpinner } from "@hrc/spinner";

export function ChaseSpinnerSpeeds() {
  return (
    <>
      <ChaseSpinner color="info" speed="slow" />
      <ChaseSpinner color="warning" />
      <ChaseSpinner color="success" speed="fast" />
    </>
  );
}
