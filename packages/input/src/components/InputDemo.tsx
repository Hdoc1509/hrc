import { DemoDocs } from "@hrc/docs";
import * as Demos from "../demos";

export const InputDemo = () => {
  return (
    <DemoDocs componentName="Input">
      <DemoDocs>
        <h3>Default</h3>
        <Demos.InputDefault />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Colors</h3>
        <Demos.InputColors />
      </DemoDocs>
      <DemoDocs>
        <h3>Disabled</h3>
        <Demos.InputDisabled />
      </DemoDocs>
      <DemoDocs layout="row" className="input-sizes">
        <h3>Sizes</h3>
        <Demos.InputSizes />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>With Icons</h3>
        <Demos.InputWithIcons />
      </DemoDocs>
      <DemoDocs layout="row" className="input-helper-text">
        <h3>With Helper Text</h3>
        <Demos.InputWithHelperText />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>With Error</h3>
        <Demos.InputWithError />
      </DemoDocs>
    </DemoDocs>
  );
};
