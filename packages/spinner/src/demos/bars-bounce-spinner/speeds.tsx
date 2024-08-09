import { BarsBounceSpinner } from "@lib/main";

export function BarsBounceSpinnerSpeeds() {
  return (
    <>
      <BarsBounceSpinner color="secondary" speed="slow" />
      <BarsBounceSpinner color="secondary" />
      <BarsBounceSpinner color="secondary" speed="fast" />
    </>
  );
}
