import { RingSpinner } from "@lib/main";

export function RingSpinnerSizes() {
  return (
    <>
      <RingSpinner color="primary" size="small" />
      <RingSpinner color="secondary" />
      <RingSpinner color="error" size="large" />
    </>
  );
}

