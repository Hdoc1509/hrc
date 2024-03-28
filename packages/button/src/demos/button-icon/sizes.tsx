import { ButtonIcon } from "@lib/main";
import { Icon } from "@hrc/material-icons";

export function ButtonIconSizes() {
  return (
    <>
      <ButtonIcon color="info" size="small">
        <Icon name="air" />
      </ButtonIcon>
      <ButtonIcon color="info">
        <Icon name="air" />
      </ButtonIcon>
      <ButtonIcon color="info" size="large">
        <Icon name="air" />
      </ButtonIcon>
    </>
  );
}
