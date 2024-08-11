import { BladeSpinner } from "@lib/main";

export function BladeSpinnerSpeeds() {
  return (
    <>
      <BladeSpinner color="secondary" speed="slow" />
      <BladeSpinner color="secondary" />
      <BladeSpinner color="secondary" speed="fast" />
    </>
  );
}
