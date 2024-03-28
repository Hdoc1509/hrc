import { Button, ButtonIcon, ButtonGroup } from "@lib/main";
import { Icon } from "@hrc/material-icons";

export function PackageDemo() {
  return (
    <>
      <Button size="large" color="primary" iconEnd={<Icon name="delete" />}>
        Delete
      </Button>
      <ButtonIcon color="error">
        <Icon name="favorite" />
      </ButtonIcon>
      <ButtonGroup>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
        <ButtonIcon>
          <Icon name="search" />
        </ButtonIcon>
      </ButtonGroup>
    </>
  );
}
