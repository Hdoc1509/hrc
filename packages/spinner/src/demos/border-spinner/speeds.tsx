import { BorderSpinner } from "@lib/main";

export function BorderSpinnerSpeeds() {
  return (
    <>
      <BorderSpinner color="secondary" speed="slow" />
      <BorderSpinner color="secondary" />
      <BorderSpinner color="secondary" speed="fast" />
    </>
  );
}
