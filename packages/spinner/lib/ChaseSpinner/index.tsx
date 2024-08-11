import { SpinnerBase, SpinnerProps } from "../SpinnerBase";
import "./style.scss";

export const ChaseSpinner = (props: SpinnerProps): JSX.Element => {
  return (
    <SpinnerBase {...props} name="chase-spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </SpinnerBase>
  );
};
