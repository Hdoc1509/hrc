import { DemoDocs } from "@hrc/docs";
import { CircleSpinner } from "@lib/main";

export const CircleSpinnerDemo = () => {
  return (
    <DemoDocs>
      <DemoDocs.TitleComponent name="CircleSpinner" />
      <DemoDocs layout="row">
        <h3>Default</h3>
        <CircleSpinner />
      </DemoDocs>
      <DemoDocs layout="grid" cols={3}>
        <h3>Colors</h3>
        <CircleSpinner color="primary" />
        <CircleSpinner color="secondary" />
        <CircleSpinner color="error" />
        <CircleSpinner color="info" />
        <CircleSpinner color="warning" />
        <CircleSpinner color="success" />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Sizes</h3>
        <CircleSpinner color="primary" size="small" />
        <CircleSpinner color="primary" />
        <CircleSpinner color="primary" size="large" />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Speeds</h3>
        <CircleSpinner color="secondary" speed="slow" />
        <CircleSpinner color="secondary" />
        <CircleSpinner color="secondary" speed="fast" />
      </DemoDocs>
    </DemoDocs>
  );
};

