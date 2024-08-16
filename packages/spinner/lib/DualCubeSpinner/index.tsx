import { SpinnerBase, SpinnerProps } from "../SpinnerBase";
import "./style.scss";

export const DualCubeSpinner = (props: SpinnerProps): JSX.Element => {
  return (
    <SpinnerBase {...props} name="dual-cube-spinner">
      <div></div>
      <div></div>
    </SpinnerBase>
  );
};
