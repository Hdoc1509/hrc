import { BarsWaveSpinner } from "@lib/main";

export function BarsWaveSpinnerSpeeds() {
  return (
    <>
      <BarsWaveSpinner color="info" speed="slow" />
      <BarsWaveSpinner color="warning" />
      <BarsWaveSpinner color="success" speed="fast" />
    </>
  );
}
