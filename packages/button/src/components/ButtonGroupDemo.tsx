import { DemoDocs } from "@hrc/docs";
import * as Demos from "../demos";

export const ButtonGroupDemo = () => {
  return (
    <DemoDocs>
      <DemoDocs.TitleComponent name="ButtonGroup" />
      <DemoDocs className="button-group-default">
        <h3>Default</h3>
        <Demos.ButtonGroupDefault />
      </DemoDocs>
      <DemoDocs className="button-group-colors">
        <h3>Colors</h3>
        <Demos.ButtonGroupColors />
      </DemoDocs>
      <DemoDocs className="with-toggle">
        <h3>Disabled</h3>
        <Demos.ButtonGroupDisabled />
      </DemoDocs>
      <DemoDocs>
        <h3>Sizes</h3>
        <Demos.ButtonGroupSizes />
      </DemoDocs>
      <DemoDocs className="button-group-column">
        <h3>Column</h3>
        <Demos.ButtonGroupColumn />
      </DemoDocs>
      <DemoDocs>
        <h3>With icons</h3>
        <Demos.ButtonGroupWithIcons />
      </DemoDocs>
    </DemoDocs>
  );
};
