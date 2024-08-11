import { SpinnerBase, SpinnerProps } from "@lib/SpinnerBase";
import "./style.scss";

export const BladeSpinner = (props: SpinnerProps): JSX.Element => {
  return (
    <SpinnerBase {...props} name="blade-spinner">
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
