import { SpinnerBase, SpinnerProps } from "../SpinnerBase";
import "./style.scss";

export const BorderSpinner = (props: SpinnerProps): JSX.Element => {
  return <SpinnerBase {...props} name="border-spinner" />;
};
