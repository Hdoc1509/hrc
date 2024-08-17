import { ChaseSpinner } from "@lib/main";

export function ChaseSpinnerSizes() {
  return (
    <>
      <ChaseSpinner color="primary" size="small" />
      <ChaseSpinner color="secondary" />
      <ChaseSpinner color="error" size="large" />
    </>
  );
}
