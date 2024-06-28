import { DemoDocs } from "@hrc/docs";
import { PackageDemo } from "../demos";

export const Demo = () => {
  return (
    <>
      <DemoDocs layout="grid" cols={1} className="package-demo">
        <h2>Docs Demo</h2>
        <PackageDemo />
      </DemoDocs>
    </>
  );
};
