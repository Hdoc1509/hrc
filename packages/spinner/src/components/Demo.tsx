import { DemoDocs } from "@hrc/docs";
import { PackageDemo } from "../demos";

export const Demo = () => {
  return (
    <DemoDocs layout="row">
      <h2>@hrc/spinner Demo</h2>
      <PackageDemo />
    </DemoDocs>
  );
};
