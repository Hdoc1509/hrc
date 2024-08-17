import { BarsBounce2Spinner } from "@hrc/spinner";

export function BarsBounce2SpinnerSpeeds() {
  return (
    <>
      <BarsBounce2Spinner color="info" speed="slow" />
      <BarsBounce2Spinner color="warning" />
      <BarsBounce2Spinner color="success" speed="fast" />
    </>
  );
}
