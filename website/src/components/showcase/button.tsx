import { Button, ButtonGroup, ButtonIcon } from "@hrc/button";
import { CommentIcon, HeartIcon, PencilIcon } from "../Icons";

export function ButtonShowcase() {
  return (
    <div className="button-showcase">
      <Button className="showcase" color="primary" rounded="full">
        Primary
      </Button>
      <Button
        className="showcase"
        color="warning"
        variant="outline"
        rounded="full"
      >
        Outline
      </Button>
      <ButtonGroup variant="outline" color="info">
        <ButtonIcon>
          <HeartIcon />
        </ButtonIcon>
        <ButtonIcon>
          <CommentIcon />
        </ButtonIcon>
        <ButtonIcon>
          <PencilIcon />
        </ButtonIcon>
      </ButtonGroup>
    </div>
  );
}
