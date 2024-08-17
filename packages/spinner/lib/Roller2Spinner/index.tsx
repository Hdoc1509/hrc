import { SpinnerProps, SpinnerBase } from "../SpinnerBase";
import "./style.scss";

export const Roller2Spinner = (props: SpinnerProps): JSX.Element => {
  return (
    <SpinnerBase {...props} name="roller-2-spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
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
