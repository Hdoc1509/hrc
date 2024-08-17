import { DoubleGrowingSpinner } from "@hrc/spinner";

export function DoubleGrowingSpinnerSpeeds() {
  return (
    <>
      <DoubleGrowingSpinner color="info" speed="slow" />
      <DoubleGrowingSpinner color="warning" />
      <DoubleGrowingSpinner color="success" speed="fast" />
    </>
  );
}

