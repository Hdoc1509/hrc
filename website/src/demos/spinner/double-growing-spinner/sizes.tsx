import { DoubleGrowingSpinner } from "@hrc/spinner";

export function DoubleGrowingSpinnerSizes() {
  return (
    <>
      <DoubleGrowingSpinner color="primary" size="small" />
      <DoubleGrowingSpinner color="secondary" />
      <DoubleGrowingSpinner color="error" size="large" />
    </>
  );
}

