import { DemoDocs } from "@hrc/docs";
import * as Demos from "../demos";

export function IconDemo() {
  return (
    <DemoDocs componentName="Icon">
      <DemoDocs layout="row">
        <h3>Default</h3>
        <Demos.IconDefault />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Colors</h3>
        <Demos.IconColors />
      </DemoDocs>
      <DemoDocs layout="row" className="with-toggle">
        <h3>Disabled</h3>
        <Demos.IconDisabled />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Sizes</h3>
        <Demos.IconSizes />
      </DemoDocs>
    </DemoDocs>
  );
}
