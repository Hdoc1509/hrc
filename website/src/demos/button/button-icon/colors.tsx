import { ButtonIcon } from "@hrc/button";
import { Icon } from "@hrc/material-icons";

const Icons = {
  primary: <Icon name="search" />,
  secondary: <Icon name="settings" />,
  error: <Icon name="delete" />,
  info: <Icon name="map" />,
  warning: <Icon name="warning" />,
  success: <Icon name="check" />,
};

const colors = Object.keys(Icons) as (keyof typeof Icons)[];

export function ButtonIconColors() {
  return (
    <>
      {colors.map((color) => (
        <div key={`button-icon-${color}`}>
          <ButtonIcon color={color}>{Icons[color]}</ButtonIcon>
          <ButtonIcon color={color} variant="outline">
            {Icons[color]}
          </ButtonIcon>
          <ButtonIcon color={color} variant="text">
            {Icons[color]}
          </ButtonIcon>
        </div>
      ))}
    </>
  );
}
