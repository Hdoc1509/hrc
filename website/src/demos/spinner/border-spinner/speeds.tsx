import { BorderSpinner } from "@hrc/spinner";

export function BorderSpinnerSpeeds() {
  return (
    <>
      <BorderSpinner color="info" speed="slow" />
      <BorderSpinner color="warning" />
      <BorderSpinner color="success" speed="fast" />
    </>
  );
}
