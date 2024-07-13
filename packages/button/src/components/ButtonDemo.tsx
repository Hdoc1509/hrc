import { DemoDocs } from "@hrc/docs";
import * as Demos from "../demos";

export const ButtonDemo = () => {
  return (
    <DemoDocs componentName="Button">
      <DemoDocs layout="grid" cols={3}>
        <h3>Default</h3>
        <Demos.ButtonDefault />
      </DemoDocs>
      <DemoDocs layout="grid" cols={3}>
        <h3>Colors</h3>
        <Demos.ButtonColors />
      </DemoDocs>
      <DemoDocs layout="grid" cols={3} withDisabled>
        <h3>Disabled</h3>
        <Demos.ButtonDisabled />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Sizes</h3>
        <Demos.ButtonSizes />
      </DemoDocs>
      <DemoDocs layout="grid" cols={1}>
        <h3>Rounded</h3>
        <Demos.ButtonRounded />
      </DemoDocs>
      <DemoDocs layout="grid" cols={2}>
        <h3>With icons</h3>
        <Demos.ButtonWithIcons />
      </DemoDocs>
    </DemoDocs>
  );
};
