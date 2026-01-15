import { DemoDocs } from "@hrc/docs";
import { PackageDemo } from "../demos";
import { PauseSpinners } from "./PauseSpinners";

export const Demo = () => {
  return (
    <DemoDocs layout="row">
      <PauseSpinners />
      <h2>@hrc/spinner Demo</h2>
      <PackageDemo />
    </DemoDocs>
  );
};
