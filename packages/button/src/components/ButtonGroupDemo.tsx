import { DemoDocs } from "@hrc/docs";
import * as Demos from "../demos";

export const ButtonGroupDemo = () => {
  return (
    <DemoDocs>
      <DemoDocs.TitleComponent name="ButtonGroup" />
      <DemoDocs layout="row">
        <h3>Default</h3>
        <Demos.ButtonGroupDefault />
      </DemoDocs>
      <DemoDocs layout="row" className="button-group-colors">
        <h3>Colors</h3>
        <Demos.ButtonGroupColors />
      </DemoDocs>
      <DemoDocs layout="row" className="button-group-disabled" withDisabled>
        <h3>Disabled</h3>
        <Demos.ButtonGroupDisabled />
      </DemoDocs>
      <DemoDocs>
        <h3>Sizes</h3>
        <Demos.ButtonGroupSizes />
      </DemoDocs>
      <DemoDocs layout="row" className="button-group-column">
        <h3>Column</h3>
        <Demos.ButtonGroupColumn />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>With icons</h3>
        <Demos.ButtonGroupWithIcons />
      </DemoDocs>
    </DemoDocs>
  );
};
