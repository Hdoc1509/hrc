import { BorderSpinner } from "@hrc/spinner";

export function BorderSpinnerSpeeds() {
  return (
    <>
      <BorderSpinner color="secondary" speed="slow" />
      <BorderSpinner color="secondary" />
      <BorderSpinner color="secondary" speed="fast" />
    </>
  );
}
