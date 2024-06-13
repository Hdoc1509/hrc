import { ButtonIcon } from "@lib/main";
import { Icon } from "@hrc/material-icons";

export function ButtonIconRounded() {
  return (
    <>
      <ButtonIcon color="success" rounded="top">
        <Icon name="adb" />
      </ButtonIcon>
      <ButtonIcon color="success" rounded="bottom">
        <Icon name="adb" />
      </ButtonIcon>
      <ButtonIcon color="success" rounded="left">
        <Icon name="adb" />
      </ButtonIcon>
      <ButtonIcon color="success" rounded="right">
        <Icon name="adb" />
      </ButtonIcon>
      <ButtonIcon color="success" rounded="full">
        <Icon name="adb" />
      </ButtonIcon>
    </>
  );
}
