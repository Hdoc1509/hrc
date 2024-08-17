import { DoubleGrowingSpinner } from "@lib/main";

export function DoubleGrowingSpinnerSizes() {
  return (
    <>
      <DoubleGrowingSpinner color="primary" size="small" />
      <DoubleGrowingSpinner color="secondary" />
      <DoubleGrowingSpinner color="error" size="large" />
    </>
  );
}

