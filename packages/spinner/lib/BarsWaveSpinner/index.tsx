import { SpinnerBase, SpinnerProps } from "@lib/SpinnerBase";
import "./style.scss";

export const BarsWaveSpinner = (props: SpinnerProps): JSX.Element => {
  return (
    <SpinnerBase {...props} name="bars-wave-spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </SpinnerBase>
  );
};
