import { SpinnerBase, SpinnerProps } from "@lib/SpinnerBase";
import "./style.scss";

export const BarsBounceSpinner = (props: SpinnerProps): JSX.Element => {
  return (
    <SpinnerBase {...props} name="bars-bounce-spinner">
      <div></div>
      <div></div>
      <div></div>
    </SpinnerBase>
  );
};
