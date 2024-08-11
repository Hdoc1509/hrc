import { SpinnerProps, SpinnerBase } from "../SpinnerBase";
import "./style.scss";

export const RotatePlaneSpinner = (props: SpinnerProps): JSX.Element => {
  return <SpinnerBase {...props} name="rotate-plane-spinner" />;
};
