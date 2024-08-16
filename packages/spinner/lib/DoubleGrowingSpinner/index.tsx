import { SpinnerBase, SpinnerProps } from "@lib/SpinnerBase";
import "./style.scss";

export const DoubleGrowingSpinner = (props: SpinnerProps): JSX.Element => {
  return (
    <SpinnerBase {...props} name="double-growing-spinner">
      <div></div>
      <div></div>
    </SpinnerBase>
  );
};
