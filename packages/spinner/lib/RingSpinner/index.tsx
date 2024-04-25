import { SpinnerProps, SpinnerBase } from "../SpinnerBase";
import "./style.scss";

export const RingSpinner = (props: SpinnerProps): JSX.Element => {
  return (
    <SpinnerBase {...props} name="ring-spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </SpinnerBase>
  );
};
