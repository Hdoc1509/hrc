import { SpinnerBase, SpinnerProps } from "@lib/SpinnerBase";
import "./style.scss";

export const BarsBounce2Spinner = (props: SpinnerProps): JSX.Element => {
  return (
    <SpinnerBase {...props} name="bars-bounce-2-spinner">
      <div></div>
      <div></div>
      <div></div>
    </SpinnerBase>
  );
};
