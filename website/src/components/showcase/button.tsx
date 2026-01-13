import { Button, ButtonGroup, ButtonIcon } from "@hrc/button";
import { CommentIcon, HeartIcon, PencilIcon, StarIcon } from "../Icons";

export function ButtonShowcase() {
  return (
    <div className="button-showcase">
      <Button color="primary" rounded="full">
        Primary
      </Button>
      <Button color="warning" variant="outline" rounded="full">
        Outline
      </Button>
      <Button color="success" variant="text" rounded="full">
        Text
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
        <ButtonIcon>
          <StarIcon />
        </ButtonIcon>
      </ButtonGroup>
    </div>
  );
}
