import { SpinnerProps, SpinnerBase } from "../SpinnerBase";
import "./style.scss";

export const RippleSpinner = (props: SpinnerProps): JSX.Element => {
  return (
    <SpinnerBase {...props} name="ripple-spinner">
      <div></div>
      <div></div>
    </SpinnerBase>
  );
};
