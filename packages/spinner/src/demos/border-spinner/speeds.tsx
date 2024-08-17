import { BorderSpinner } from "@lib/main";

export function BorderSpinnerSpeeds() {
  return (
    <>
      <BorderSpinner color="info" speed="slow" />
      <BorderSpinner color="warning" />
      <BorderSpinner color="success" speed="fast" />
    </>
  );
}
