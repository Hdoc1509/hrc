import { BladeSpinner } from "@lib/main";

export function BladeSpinnerSpeeds() {
  return (
    <>
      <BladeSpinner color="info" speed="slow" />
      <BladeSpinner color="warning" />
      <BladeSpinner color="success" speed="fast" />
    </>
  );
}
