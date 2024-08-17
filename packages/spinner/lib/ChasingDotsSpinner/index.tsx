import { SpinnerBase, SpinnerProps } from "@lib/SpinnerBase";
import "./style.scss";

export const ChasingDotsSpinner = (props: SpinnerProps): JSX.Element => {
  return (
    <SpinnerBase {...props} name="chasing-dots-spinner">
      <div></div>
      <div></div>
    </SpinnerBase>
  );
};
