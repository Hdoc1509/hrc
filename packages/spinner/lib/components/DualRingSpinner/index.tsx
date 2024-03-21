import { SpinnerBase, SpinnerProps } from "../SpinnerBase";
import "./style.scss";

export const DualRingSpinner = (props: SpinnerProps): JSX.Element => {
  return <SpinnerBase {...props} name="dual-ring-spinner" />;
};
