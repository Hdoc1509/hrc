import { ButtonIcon } from "@lib/main";
import { Icon } from "@hrc/material-icons";

const Icons = {
  primary: <Icon name="search" />,
  secondary: <Icon name="settings" />,
  error: <Icon name="delete" />,
  info: <Icon name="map" />,
  warning: <Icon name="warning" />,
  success: <Icon name="check" />,
};

export function ButtonIconColors() {
  return (
    <>
      {(Object.keys(Icons) as (keyof typeof Icons)[]).map((color) => (
        <div key={`button-icon-${color}`}>
          <ButtonIcon key={`button-icon-${color}-default`} color={color}>
            {Icons[color]}
          </ButtonIcon>
          <ButtonIcon
            key={`button-icon-${color}-outline`}
            color={color}
            variant="outline"
          >
            {Icons[color]}
          </ButtonIcon>
          <ButtonIcon
            key={`button-icon-${color}-text`}
            color={color}
            variant="text"
          >
            {Icons[color]}
          </ButtonIcon>
        </div>
      ))}
    </>
  );
}
