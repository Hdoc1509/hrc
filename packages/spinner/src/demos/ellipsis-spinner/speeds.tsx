import { EllipsisSpinner } from "@lib/main";

export function EllipsisSpinnerSpeeds() {
  return (
    <>
      <EllipsisSpinner color="info" speed="slow" />
      <EllipsisSpinner color="warning" />
      <EllipsisSpinner color="success" speed="fast" />
    </>
  );
}

