import { HeartSpinner } from "@hrc/spinner";

export function HeartSpinnerSpeeds() {
  return (
    <>
      <HeartSpinner color="info" speed="slow" />
      <HeartSpinner color="warning" />
      <HeartSpinner color="success" speed="fast" />
    </>
  );
}

