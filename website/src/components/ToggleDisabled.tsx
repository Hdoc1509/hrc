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
        <Icon name={disabled ? "toggle_on" : "toggle_off"} />
        Disabled
      </Button>
    </div>
  );
}
