import { ChasingDotsSpinner } from "@lib/main";

export function ChasingDotsSpinnerSpeeds() {
  return (
    <>
      <ChasingDotsSpinner color="info" speed="slow" />
      <ChasingDotsSpinner color="warning" />
      <ChasingDotsSpinner color="success" speed="fast" />
    </>
  );
}
