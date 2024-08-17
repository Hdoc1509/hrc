import { RippleSpinner } from "@hrc/spinner";

export function RippleSpinnerSpeeds() {
  return (
    <>
      <RippleSpinner color="info" speed="slow" />
      <RippleSpinner color="warning" />
      <RippleSpinner color="success" speed="fast" />
    </>
  );
}

