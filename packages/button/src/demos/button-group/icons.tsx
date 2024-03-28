import { Button, ButtonIcon, ButtonGroup } from "@lib/main";
import { Icon } from "@hrc/material-icons";

const Group = () => {
  return (
    <>
      <ButtonIcon>
        <Icon name="add" />
      </ButtonIcon>
      <ButtonIcon>
        <Icon name="remove" />
      </ButtonIcon>
      <ButtonIcon>
        <Icon name="percent" />
      </ButtonIcon>
      <Button>Clear</Button>
    </>
  );
};

export function ButtonGroupWithIcons() {
  return (
    <>
      <ButtonGroup color="success">
        <Group />
      </ButtonGroup>
      <ButtonGroup color="success" variant="outline">
        <Group />
      </ButtonGroup>
      <ButtonGroup color="success" variant="text">
        <Group />
      </ButtonGroup>
    </>
  );
}
