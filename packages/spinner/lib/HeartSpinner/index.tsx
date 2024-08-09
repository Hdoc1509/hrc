import { SpinnerBase, SpinnerProps } from "@lib/SpinnerBase";
import "./style.scss";

export const HeartSpinner = (props: SpinnerProps): JSX.Element => {
  return (
    <SpinnerBase {...props} name="heart-spinner">
      <div></div>
    </SpinnerBase>
  );
};
