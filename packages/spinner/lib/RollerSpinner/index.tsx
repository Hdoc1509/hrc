import { SpinnerProps, SpinnerBase } from "../SpinnerBase";
import "./style.scss";

export const RollerSpinner = (props: SpinnerProps): JSX.Element => {
  return (
    <SpinnerBase {...props} name="roller-spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </SpinnerBase>
  );
};
