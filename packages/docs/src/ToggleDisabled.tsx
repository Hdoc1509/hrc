import { Button } from "@hrc/button";
import { Icon } from "@hrc/material-icons";

type Props = {
  disabled: boolean;
  setter: (disabled: boolean) => void;
};

export function ToggleDisabled({ disabled, setter }: Props) {
  return (
    <div>
      <Button
        color={disabled ? "info" : undefined}
        onClick={() => setter(!disabled)}
      >
        {disabled ? <Icon name="toggle_on" /> : <Icon name="toggle_off" />}
        Disabled
      </Button>
    </div>
  );
}
