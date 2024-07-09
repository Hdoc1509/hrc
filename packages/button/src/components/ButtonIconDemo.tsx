import { DemoDocs } from "@hrc/docs";
import * as Demos from "../demos";

export const ButtonIconDemo = () => {
  return (
    <DemoDocs>
      <DemoDocs.TitleComponent name="ButtonIcon" />
      <DemoDocs layout="row">
        <h3>Default</h3>
        <Demos.ButtonIconDefault />
      </DemoDocs>
      <DemoDocs layout="grid">
        <h3>Colors</h3>
        <Demos.ButtonIconColors />
      </DemoDocs>
      <DemoDocs layout="grid" cols={3} withDisabled>
        <h3>Disabled</h3>
        <Demos.ButtonIconDisabled />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Sizes</h3>
        <Demos.ButtonIconSizes />
      </DemoDocs>
      <DemoDocs layout="grid" cols={3}>
        <h3>Rounded</h3>
        <Demos.ButtonIconRounded />
      </DemoDocs>
    </DemoDocs>
  );
};
