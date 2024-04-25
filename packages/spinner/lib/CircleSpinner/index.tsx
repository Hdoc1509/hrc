import { SpinnerBase, SpinnerProps } from "../SpinnerBase";
import "./style.scss";

export const CircleSpinner = (props: SpinnerProps): JSX.Element => {
  return <SpinnerBase {...props} name="circle-spinner" />;
};
