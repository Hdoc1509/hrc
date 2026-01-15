import { useState } from "react";
import "./PauseSpinners.scss";

type Props = {
  defaultPaused?: boolean;
};

export function PauseSpinners({ defaultPaused = true }: Props) {
  const [paused, setPaused] = useState(defaultPaused);

  return (
    <label className="pause-spinners" data-paused={paused}>
      <input
        type="checkbox"
        checked={paused}
        onChange={() => setPaused(!paused)}
      />
      Pause
    </label>
  );
}
