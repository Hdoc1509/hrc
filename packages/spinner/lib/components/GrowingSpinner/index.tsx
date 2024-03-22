import { SpinnerBase, SpinnerProps } from "../SpinnerBase";
import "./style.scss";

export const GrowingSpinner = (props: SpinnerProps) => {
  return <SpinnerBase {...props} name="growing-spinner" />;
};
