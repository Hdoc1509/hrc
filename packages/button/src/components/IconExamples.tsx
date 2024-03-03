import { Icon } from "@hdoc-react/material-icons";
import { ButtonIcon } from "../../lib/main";

export const IconExamples = ({ error }: { error: boolean }) => {
  return (
    <div className="button-icons">
      <ButtonIcon color="primary" size="small" disabled={error}>
        <Icon name="check" />
      </ButtonIcon>
      <ButtonIcon color="secondary" disabled={error}>
        <Icon name="delete" />
      </ButtonIcon>
      <ButtonIcon color="error" size="large" disabled={error}>
        <Icon name="error" />
      </ButtonIcon>
      <ButtonIcon color="info" size="large" disabled={error} variant="outline">
        <Icon name="map" />
      </ButtonIcon>
      <ButtonIcon color="warning" disabled={error} variant="outline">
        <Icon name="settings" />
      </ButtonIcon>
      <ButtonIcon
        color="success"
        size="small"
        disabled={error}
        variant="outline"
      >
        <Icon name="search" />
      </ButtonIcon>
      <ButtonIcon
        color="primary"
        disabled={error}
        variant="outline"
        size="small"
        fullRounded
      >
        <Icon name="check" />
      </ButtonIcon>
      <ButtonIcon
        color="secondary"
        disabled={error}
        variant="outline"
        fullRounded
      >
        <Icon name="delete" />
      </ButtonIcon>
      <ButtonIcon
        color="error"
        disabled={error}
        variant="outline"
        size="large"
        fullRounded
      >
        <Icon name="error" />
      </ButtonIcon>
      <ButtonIcon color="info" size="large" disabled={error} fullRounded>
        <Icon name="map" />
      </ButtonIcon>
      <ButtonIcon color="warning" disabled={error} fullRounded>
        <Icon name="settings" />
      </ButtonIcon>
      <ButtonIcon color="success" size="small" disabled={error} fullRounded>
        <Icon name="search" />
      </ButtonIcon>
    </div>
  );
};
