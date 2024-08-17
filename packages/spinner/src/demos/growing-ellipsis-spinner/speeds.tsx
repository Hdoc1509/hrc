import { GrowingEllipsisSpinner } from "@lib/main";

export function GrowingEllipsisSpinnerSpeeds() {
  return (
    <>
      <GrowingEllipsisSpinner color="secondary" speed="slow" />
      <GrowingEllipsisSpinner color="secondary" />
      <GrowingEllipsisSpinner color="secondary" speed="fast" />
    </>
  );
}
