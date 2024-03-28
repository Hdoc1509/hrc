import { DemoDocs } from "@hrc/docs";
import { PackageDemo } from "../demos/package";

export const Demo = () => {
  return (
    <>
      <DemoDocs layout="row">
        <h2>Docs Demo</h2>
        <PackageDemo />
      </DemoDocs>
    </>
  );
};
