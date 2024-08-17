import { RippleSpinner } from "@lib/main";

export function RippleSpinnerSpeeds() {
  return (
    <>
      <RippleSpinner color="info" speed="slow" />
      <RippleSpinner color="warning" />
      <RippleSpinner color="success" speed="fast" />
    </>
  );
}

