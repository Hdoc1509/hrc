import { GrowingEllipsisSpinner } from "@hrc/spinner";

export function GrowingEllipsisSpinnerSizes() {
  return (
    <>
      <GrowingEllipsisSpinner color="primary" size="small" />
      <GrowingEllipsisSpinner color="secondary" />
      <GrowingEllipsisSpinner color="error" size="large" />
    </>
  );
}
