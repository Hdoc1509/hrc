import { HeartSpinner } from "@lib/main";

export function HeartSpinnerSpeeds() {
  return (
    <>
      <HeartSpinner color="info" speed="slow" />
      <HeartSpinner color="warning" />
      <HeartSpinner color="success" speed="fast" />
    </>
  );
}

