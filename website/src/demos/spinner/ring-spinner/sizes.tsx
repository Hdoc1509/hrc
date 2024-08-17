import { RingSpinner } from "@hrc/spinner";

export function RingSpinnerSizes() {
  return (
    <>
      <RingSpinner color="primary" size="small" />
      <RingSpinner color="secondary" />
      <RingSpinner color="error" size="large" />
    </>
  );
}

