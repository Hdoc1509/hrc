import { BarsBounceSpinner } from "@lib/main";

export function BarsBounceSpinnerSpeeds() {
  return (
    <>
      <BarsBounceSpinner color="info" speed="slow" />
      <BarsBounceSpinner color="warning" />
      <BarsBounceSpinner color="success" speed="fast" />
    </>
  );
}
