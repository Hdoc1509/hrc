import { DemoDocs } from "@hrc/docs";
import * as Demos from "../demos";

export const ButtonGroupDemo = () => {
  return (
    <DemoDocs>
      <DemoDocs.TitleComponent name="ButtonGroup" />
      <DemoDocs layout="grid" cols={2}>
        <h3>Default</h3>
        <Demos.ButtonGroupDefault />
      </DemoDocs>
      <DemoDocs layout="grid" cols={3}>
        <h3>Colors</h3>
        <Demos.ButtonGroupColors />
      </DemoDocs>
      <DemoDocs layout="row" className="button--primary">
        <h3>Sizes</h3>
        <Demos.ButtonGroupSizes />
      </DemoDocs>
      <DemoDocs layout="row">
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
