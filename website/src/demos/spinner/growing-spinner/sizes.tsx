import { GrowingSpinner } from "@hrc/spinner";

export function GrowingSpinnerSizes() {
  return (
    <>
      <GrowingSpinner color="primary" size="small" />
      <GrowingSpinner color="secondary" />
      <GrowingSpinner color="error" size="large" />
    </>
  );
}

