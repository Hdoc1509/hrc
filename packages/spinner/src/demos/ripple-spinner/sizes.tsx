import { RippleSpinner } from "@lib/main";

export function RippleSpinnerSizes() {
  return (
    <>
      <RippleSpinner color="primary" size="small" />
      <RippleSpinner color="secondary" />
      <RippleSpinner color="error" size="large" />
    </>
  );
}

