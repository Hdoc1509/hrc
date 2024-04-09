import { DemoDocs } from "@hrc/docs";
import * as Demos from "../demos";

export function IconDemo() {
  return (
    <DemoDocs>
      <DemoDocs.TitleComponent name="Icon" />
      <DemoDocs layout="row">
        <h3>Default</h3>
        <Demos.IconDefault />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Colors</h3>
        <Demos.IconColors />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Sizes</h3>
        <Demos.IconSizes />
      </DemoDocs>
    </DemoDocs>
  );
}
