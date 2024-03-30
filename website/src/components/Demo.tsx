import { DemoDocs } from "@hrc/docs";
import type { ComponentProps } from "react";
import "./Demo.css";

export const Demo = (props: ComponentProps<typeof DemoDocs>) => {
  return (
    <DemoDocs className="demo">
      <DemoDocs {...props} />
    </DemoDocs>
  );
};
