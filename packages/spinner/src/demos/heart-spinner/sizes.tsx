import { HeartSpinner } from "@lib/main";

export function HeartSpinnerSizes() {
  return (
    <>
      <HeartSpinner color="primary" size="small" />
      <HeartSpinner color="secondary" />
      <HeartSpinner color="error" size="large" />
    </>
  );
}
