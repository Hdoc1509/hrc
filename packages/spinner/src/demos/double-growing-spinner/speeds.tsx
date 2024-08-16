import { DoubleGrowingSpinner } from "@lib/main";

export function DoubleGrowingSpinnerSpeeds() {
  return (
    <>
      <DoubleGrowingSpinner color="success" speed="slow" />
      <DoubleGrowingSpinner color="success" />
      <DoubleGrowingSpinner color="success" speed="fast" />
    </>
  );
}

