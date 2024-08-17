import { RollerSpinner } from "@hrc/spinner";

export function RollerSpinnerSpeeds() {
  return (
    <>
      <RollerSpinner color="info" speed="slow" />
      <RollerSpinner color="warning" />
      <RollerSpinner color="success" speed="fast" />
    </>
  );
}

