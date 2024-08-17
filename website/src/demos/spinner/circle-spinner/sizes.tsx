import { CircleSpinner } from "@hrc/spinner";

export function CircleSpinnerSizes() {
  return (
    <>
      <CircleSpinner color="primary" size="small" />
      <CircleSpinner color="secondary" />
      <CircleSpinner color="error" size="large" />
    </>
  );
}
