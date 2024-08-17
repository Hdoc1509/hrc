import { ChasingDotsSpinner } from "@hrc/spinner";

export function ChasingDotsSpinnerSizes() {
  return (
    <>
      <ChasingDotsSpinner color="primary" size="small" />
      <ChasingDotsSpinner color="secondary" />
      <ChasingDotsSpinner color="error" size="large" />
    </>
  );
}
