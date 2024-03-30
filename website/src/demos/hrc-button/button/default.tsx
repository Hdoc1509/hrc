import { Button } from "@hrc/button";

export function ButtonDefault() {
  return (
    <>
      <Button />
      <Button variant="outline">Outline</Button>
      <Button variant="text">Text</Button>
      <Button disabled>Disabled</Button>
    </>
  );
}
