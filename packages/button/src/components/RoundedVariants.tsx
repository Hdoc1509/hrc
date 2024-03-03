import { Button } from "../../lib/main";

export const RoundedVariants = ({ error }: { error: boolean }) => {
  return (
    <div className="rounded-variants">
      <Button roundedSide="top" color="primary" size="large" disabled={error}>
        Top rounded
      </Button>
      <Button roundedSide="bottom" color="info" size="large" disabled={error}>
        Bottom rounded
      </Button>
      <Button roundedSide="left" color="warning" size="large" disabled={error}>
        Left rounded
      </Button>
      <Button roundedSide="right" color="success" size="large" disabled={error}>
        Right rounded
      </Button>
      <Button color="success" size="large" disabled={error} fullRounded>
        Full rounded
      </Button>
      <Button color="warning" size="large" disabled={error} fullRounded>
        Full rounded
      </Button>
      <Button color="info" size="large" disabled={error} fullRounded>
        Full rounded
      </Button>
      <Button color="primary" size="large" disabled={error} fullRounded>
        Full rounded
      </Button>
    </div>
  );
};
