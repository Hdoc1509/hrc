import { DemoDocs } from "@hrc/docs";
import { BorderSpinner } from "@lib/main";

export const BorderSpinnerDemo = () => {
  return (
    <DemoDocs>
      <DemoDocs.TitleComponent name="BorderSpinner" />
      <DemoDocs layout="row">
        <h3>Default</h3>
        <BorderSpinner />
      </DemoDocs>
      <DemoDocs layout="grid" cols={3}>
        <h3>Colors</h3>
        <BorderSpinner color="primary" />
        <BorderSpinner color="secondary" />
        <BorderSpinner color="error" />
        <BorderSpinner color="info" />
        <BorderSpinner color="warning" />
        <BorderSpinner color="success" />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Sizes</h3>
        <BorderSpinner color="error" size="small" />
        <BorderSpinner color="error" />
        <BorderSpinner color="error" size="large" />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Speeds</h3>
        <BorderSpinner color="warning" speed="slow" />
        <BorderSpinner color="warning" />
        <BorderSpinner color="warning" speed="fast" />
      </DemoDocs>
    </DemoDocs>
  );
};
