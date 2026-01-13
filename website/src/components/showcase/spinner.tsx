import { useState } from "react";
import { Checkbox } from "@hrc/input";
import {
  BarsWaveSpinner,
  ChaseSpinner,
  DoubleGrowingSpinner,
  EllipsisSpinner,
  RotatePlaneSpinner,
} from "@hrc/spinner";

export function SpinnerShowcase() {
  const [pause, setPause] = useState(false);

  return (
    <div className="spinner-showcase" data-pause={pause}>
      <Checkbox
        label="Pause"
        color="info"
        onChange={(e) => setPause(e.target.checked)}
        checked={pause}
      />
      <EllipsisSpinner color="primary" />
      <BarsWaveSpinner color="error" />
      <DoubleGrowingSpinner color="warning" />
      <RotatePlaneSpinner color="success" />
      <ChaseSpinner color="info" />
    </div>
  );
}
