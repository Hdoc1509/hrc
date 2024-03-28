import { Button } from "@lib/main";

export function ButtonSizes() {
  return (
    <>
      <Button color="primary" size="small">
        Small
      </Button>
      <Button color="primary" />
      <Button color="primary" size="large">
        Large
      </Button>
    </>
  );
}
