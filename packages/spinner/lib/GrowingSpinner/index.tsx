import { SpinnerBase, SpinnerProps } from "../SpinnerBase";
import "./style.scss";

export const GrowingSpinner = (props: SpinnerProps): JSX.Element => {
  return <SpinnerBase {...props} name="growing-spinner" />;
};
