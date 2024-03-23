/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { DemoDocs } from "@hrc/docs";
import { SpinnerProps } from "@lib/components/SpinnerBase";
import { RingSpinner } from "@lib/main";

type Props = {
  spinner: typeof RingSpinner;
  sizesColor: Required<SpinnerProps>["color"];
  speedsColor: Required<SpinnerProps>["color"];
};

export const SpinnerDemo = ({
  spinner: Spinner,
  sizesColor,
  speedsColor,
}: Props) => {
  return (
    <DemoDocs>
      <DemoDocs.TitleComponent name={Spinner.name} />
      <DemoDocs layout="row">
        <h3>Default</h3>
        <Spinner />
      </DemoDocs>
      <DemoDocs layout="grid">
        <h3>Colors</h3>
        <Spinner color="primary" />
        <Spinner color="secondary" />
        <Spinner color="error" />
        <Spinner color="info" />
        <Spinner color="warning" />
        <Spinner color="success" />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Sizes</h3>
        <Spinner color={sizesColor} size="small" />
        <Spinner color={sizesColor} />
        <Spinner color={sizesColor} size="large" />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Speeds</h3>
        <Spinner color={speedsColor} speed="slow" />
        <Spinner color={speedsColor} />
        <Spinner color={speedsColor} speed="fast" />
      </DemoDocs>
    </DemoDocs>
  );
};
