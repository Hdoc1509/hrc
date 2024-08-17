import { SpinnerBase, SpinnerProps } from "@lib/SpinnerBase";
import "./style.scss";

export const GrowingEllipsisSpinner = (props: SpinnerProps): JSX.Element => {
  return (
    <SpinnerBase {...props} name="growing-ellipsis-spinner">
      <div></div>
      <div></div>
      <div></div>
    </SpinnerBase>
  );
};
