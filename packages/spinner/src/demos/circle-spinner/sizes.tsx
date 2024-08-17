import { CircleSpinner } from "@lib/main";

export function CircleSpinnerSizes() {
  return (
    <>
      <CircleSpinner color="primary" size="small" />
      <CircleSpinner color="secondary" />
      <CircleSpinner color="error" size="large" />
    </>
  );
}
