import { BarsBounceSpinner } from "@hrc/spinner";

export function BarsBounceSpinnerSizes() {
  return (
    <>
      <BarsBounceSpinner color="primary" size="small" />
      <BarsBounceSpinner color="secondary" />
      <BarsBounceSpinner color="error" size="large" />
    </>
  );
}
