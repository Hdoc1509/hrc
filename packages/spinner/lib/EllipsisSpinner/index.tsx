import { SpinnerProps, SpinnerBase } from "../SpinnerBase";
import "./style.scss";

export const EllipsisSpinner = (props: SpinnerProps): JSX.Element => {
  return (
    <SpinnerBase {...props} name="ellipsis-spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </SpinnerBase>
  );
};
