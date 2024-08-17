import { RotatePlaneSpinner } from "@lib/main";

export function RotatePlaneSpinnerSpeeds() {
  return (
    <>
      <RotatePlaneSpinner color="info" speed="slow" />
      <RotatePlaneSpinner color="warning" />
      <RotatePlaneSpinner color="success" speed="fast" />
    </>
  );
}
