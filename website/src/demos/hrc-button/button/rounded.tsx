import { Button } from "@hrc/button";

export function ButtonRounded() {
  return (
    <>
      <Button color="secondary" roundedSide="top">
        Top rounded
      </Button>
      <Button color="secondary" roundedSide="bottom">
        Bottom rounded
      </Button>
      <Button color="secondary" roundedSide="left">
        Left rounded
      </Button>
      <Button color="secondary" roundedSide="right">
        Right rounded
      </Button>
      <Button color="secondary" fullRounded>
        Full rounded
      </Button>
    </>
  );
}
