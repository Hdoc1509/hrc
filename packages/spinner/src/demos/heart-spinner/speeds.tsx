import { HeartSpinner } from "@lib/main";

export function HeartSpinnerSpeeds() {
  return (
    <>
      <HeartSpinner color="secondary" speed="slow" />
      <HeartSpinner color="secondary" />
      <HeartSpinner color="secondary" speed="fast" />
    </>
  );
}

