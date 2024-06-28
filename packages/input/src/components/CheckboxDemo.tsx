import { DemoDocs } from "@hrc/docs";
import * as Demos from "../demos";

export const CheckboxDemo = () => {
  return (
    <DemoDocs>
      <DemoDocs.TitleComponent name="Checkbox" />
      <DemoDocs layout="grid" cols={2} className="checkbox-default">
        <h3>Default</h3>
        <Demos.CheckboxDefault />
      </DemoDocs>
      <DemoDocs layout="grid" cols={2}>
        <h3>Colors</h3>
        <Demos.CheckboxColors />
      </DemoDocs>
      <DemoDocs layout="grid" cols={2} className="checkbox-disabled">
        <h3>Disabled</h3>
        <Demos.CheckboxDisabled />
      </DemoDocs>
    </DemoDocs>
  );
};
