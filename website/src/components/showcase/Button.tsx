import { Button } from "@hrc/button";

export function ButtonShowcase() {
  return (
    <div className="showcase-wrapper">
      <Button className="showcase" color="primary" rounded="full">
        Primary
      </Button>
      {/* TODO: show: Button, ButtonIcon, ButtonGroup */}
      <Button
        className="showcase"
        color="primary"
        variant="outline"
        rounded="full"
      >
        Outline
      </Button>
    </div>
  );
}
