import { DemoDocs } from "@hrc/docs";
import { PackageDemo } from "../demos";

export const Demo = () => {
  return (
    <DemoDocs layout="grid" className="package-demo">
      <h2>@hrc/input Demo</h2>
      <PackageDemo />
    </DemoDocs>
  );
};
