import { RollerSpinner } from "@lib/main";

export function RollerSpinnerSpeeds() {
  return (
    <>
      <RollerSpinner color="info" speed="slow" />
      <RollerSpinner color="info" />
      <RollerSpinner color="info" speed="fast" />
    </>
  );
}

