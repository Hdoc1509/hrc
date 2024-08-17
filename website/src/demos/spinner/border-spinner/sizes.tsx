import { BorderSpinner } from "@hrc/spinner";

export function BorderSpinnerSizes() {
  return (
    <>
      <BorderSpinner color="primary" size="small" />
      <BorderSpinner color="secondary" />
      <BorderSpinner color="error" size="large" />
    </>
  );
}
