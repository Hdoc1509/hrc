import { ButtonIcon } from "@hrc/button";
import { Icon } from "@hrc/material-icons";

export function ButtonIconRounded() {
  return (
    <>
      <ButtonIcon color="success" roundedSide="top">
        <Icon name="adb" />
      </ButtonIcon>
      <ButtonIcon color="success" roundedSide="bottom">
        <Icon name="adb" />
      </ButtonIcon>
      <ButtonIcon color="success" roundedSide="left">
        <Icon name="adb" />
      </ButtonIcon>
      <ButtonIcon color="success" roundedSide="right">
        <Icon name="adb" />
      </ButtonIcon>
      <ButtonIcon color="success" fullRounded>
        <Icon name="adb" />
      </ButtonIcon>
    </>
  );
}
