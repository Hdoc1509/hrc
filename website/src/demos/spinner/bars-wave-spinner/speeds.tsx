import { BarsWaveSpinner } from "@hrc/spinner";

export function BarsWaveSpinnerSpeeds() {
  return (
    <>
      <BarsWaveSpinner color="info" speed="slow" />
      <BarsWaveSpinner color="warning" />
      <BarsWaveSpinner color="success" speed="fast" />
    </>
  );
}
