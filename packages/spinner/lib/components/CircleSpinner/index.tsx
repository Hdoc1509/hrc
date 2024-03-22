import { SpinnerBase, SpinnerProps } from "../SpinnerBase";
import "./style.scss";

export const CircleSpinner = (props: SpinnerProps) => {
  return <SpinnerBase {...props} name="circle-spinner" />;
};
