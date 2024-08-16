import { BarsWaveSpinner } from "@lib/main";

export function BarsWaveSpinnerSpeeds() {
  return (
    <>
      <BarsWaveSpinner color="secondary" speed="slow" />
      <BarsWaveSpinner color="secondary" />
      <BarsWaveSpinner color="secondary" speed="fast" />
    </>
  );
}
