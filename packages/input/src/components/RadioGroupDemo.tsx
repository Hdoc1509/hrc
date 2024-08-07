import { DemoDocs } from "@hrc/docs";
import * as Demos from "../demos";

export const RadioGroupDemo = () => {
  return (
    <DemoDocs componentName="RadioGroup">
      <DemoDocs>
        <h3>Default</h3>
        <Demos.RadioGroupDefault />
      </DemoDocs>
      <DemoDocs layout="grid" cols={2}>
        <h3>Colors</h3>
        <Demos.RadioGroupColors />
      </DemoDocs>
      <DemoDocs>
        <h3>Disabled</h3>
        <Demos.RadioGroupDisabled />
      </DemoDocs>
      <DemoDocs>
        <h3>Row</h3>
        <Demos.RadioGroupRow />
      </DemoDocs>
      <DemoDocs>
        <h3>Controlled</h3>
        <Demos.RadioGroupControlled />
      </DemoDocs>
      <DemoDocs>
        <h3>Type-safe</h3>
        <Demos.RadioGroupTypeSafe />
      </DemoDocs>
      <DemoDocs>
        <h3>{`<Radio /> children`}</h3>
        <Demos.RadioGroupRadioChildren />
      </DemoDocs>
    </DemoDocs>
  );
};
