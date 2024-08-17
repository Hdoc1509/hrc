import { BarsBounceSpinner } from "@hrc/spinner";

export function BarsBounceSpinnerSpeeds() {
  return (
    <>
      <BarsBounceSpinner color="info" speed="slow" />
      <BarsBounceSpinner color="warning" />
      <BarsBounceSpinner color="success" speed="fast" />
    </>
  );
}
