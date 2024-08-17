import { SpinnerProps, SpinnerBase } from "../SpinnerBase";
import "./style.scss";

export const CubeGridSpinner = (props: SpinnerProps): JSX.Element => {
  return (
    <SpinnerBase {...props} name="cube-grid-spinner">
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
