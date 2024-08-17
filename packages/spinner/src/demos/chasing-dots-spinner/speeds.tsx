import { ChasingDotsSpinner } from "@lib/main";

export function ChasingDotsSpinnerSpeeds() {
  return (
    <>
      <ChasingDotsSpinner color="info" speed="slow" />
      <ChasingDotsSpinner color="info" />
      <ChasingDotsSpinner color="info" speed="fast" />
    </>
  );
}
