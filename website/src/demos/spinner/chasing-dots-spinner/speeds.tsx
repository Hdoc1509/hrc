import { ChasingDotsSpinner } from "@hrc/spinner";

export function ChasingDotsSpinnerSpeeds() {
  return (
    <>
      <ChasingDotsSpinner color="info" speed="slow" />
      <ChasingDotsSpinner color="warning" />
      <ChasingDotsSpinner color="success" speed="fast" />
    </>
  );
}
