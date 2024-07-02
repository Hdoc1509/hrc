import { DemoDocs } from "@hrc/docs";
import * as Demos from "../demos";

export const RadioGroupDemo = () => {
  return (
    <DemoDocs>
      <DemoDocs.TitleComponent name="RadioGroup" />
      <DemoDocs layout="grid" cols={2}>
        <h3>Default</h3>
        <Demos.RadioGroupDefault />
      </DemoDocs>
      <DemoDocs layout="grid" cols={2}>
        <h3>Colors</h3>
        <Demos.RadioGroupColors />
      </DemoDocs>
      <DemoDocs layout="grid" cols={1}>
        <h3>Row</h3>
        <Demos.RadioGroupRow />
      </DemoDocs>
    </DemoDocs>
  );
};
