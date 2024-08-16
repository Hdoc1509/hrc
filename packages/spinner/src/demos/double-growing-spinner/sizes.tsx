import { DoubleGrowingSpinner } from "@lib/main";

export function DoubleGrowingSpinnerSizes() {
  return (
    <>
      <DoubleGrowingSpinner color="warning" size="small" />
      <DoubleGrowingSpinner color="warning" />
      <DoubleGrowingSpinner color="warning" size="large" />
    </>
  );
}

