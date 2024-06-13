import { Button } from "@lib/main";

export function ButtonRounded() {
  return (
    <>
      <Button color="secondary" rounded="top">
        Top rounded
      </Button>
      <Button color="secondary" rounded="bottom">
        Bottom rounded
      </Button>
      <Button color="secondary" rounded="left">
        Left rounded
      </Button>
      <Button color="secondary" rounded="right">
        Right rounded
      </Button>
      <Button color="secondary" rounded="full">
        Full rounded
      </Button>
      <Button color="secondary" rounded="none">
        No rounded
      </Button>
    </>
  );
}
