import { DemoDocs } from "@hrc/docs";
import * as Demos from "../demos";

export const InputDemo = () => {
  return (
    <DemoDocs>
      <DemoDocs.TitleComponent name="Input" />
      <DemoDocs>
        <h3>Default</h3>
        <Demos.InputDefault />
      </DemoDocs>
      <DemoDocs>
        <h3>Disabled</h3>
        <Demos.InputDisabled />
      </DemoDocs>
      <DemoDocs className="input-sizes">
        <h3>Sizes</h3>
        <Demos.InputSizes />
      </DemoDocs>
      <DemoDocs>
        <h3>With Icons</h3>
        <Demos.InputWithIcons />
      </DemoDocs>
      <DemoDocs>
        <h3>With Helper Text</h3>
        <Demos.InputWithHelperText />
      </DemoDocs>
      <DemoDocs>
        <h3>With Error</h3>
        <Demos.InputWithError />
      </DemoDocs>
    </DemoDocs>
  );
};
