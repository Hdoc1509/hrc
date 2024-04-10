import { ButtonIcon } from "@lib/main";
import { Icon } from "@hrc/material-icons";

export function ButtonIconDefault() {
  return (
    <>
      <ButtonIcon>
        <Icon name="people" />
      </ButtonIcon>
      <ButtonIcon variant="outline">
        <Icon name="people" />
      </ButtonIcon>
      <ButtonIcon variant="text">
        <Icon name="people" />
      </ButtonIcon>
    </>
  );
}
