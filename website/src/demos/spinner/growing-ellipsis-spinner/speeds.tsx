import { GrowingEllipsisSpinner } from "@hrc/spinner";

export function GrowingEllipsisSpinnerSpeeds() {
  return (
    <>
      <GrowingEllipsisSpinner color="info" speed="slow" />
      <GrowingEllipsisSpinner color="warning" />
      <GrowingEllipsisSpinner color="success" speed="fast" />
    </>
  );
}
