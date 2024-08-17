import { BladeSpinner } from "@lib/main";

export function BladeSpinnerSizes() {
  return (
    <>
      <BladeSpinner color="primary" size="small" />
      <BladeSpinner color="secondary" />
      <BladeSpinner color="error" size="large" />
    </>
  );
}
