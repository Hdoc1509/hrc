import { DemoDocs } from "@hrc/docs";
import "./Demo.css";

export const Demo = (props: React.ComponentProps<typeof DemoDocs>) => {
  return (
    <DemoDocs className="demo">
      <DemoDocs {...props} />
    </DemoDocs>
  );
};
