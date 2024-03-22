import {
  BorderSpinner,
  CircleSpinner,
  DualRingSpinner,
  RingSpinner,
} from "@lib/main";
import "./App.css";

function App() {
  return (
    <>
      <section>
        <h2>&lt;RingSpinner /&gt;</h2>
        <RingSpinner />
        <RingSpinner color="primary" />
        <RingSpinner color="secondary" />
        <RingSpinner color="error" />
        <RingSpinner color="warning" />
        <RingSpinner color="info" />
        <RingSpinner color="success" />
      </section>
      <section>
        <BorderSpinner />
        <BorderSpinner color="primary" />
        <BorderSpinner color="secondary" />
        <BorderSpinner color="error" />
        <BorderSpinner color="warning" />
        <BorderSpinner color="info" />
        <BorderSpinner color="success" />
      </section>
      <section>
        <DualRingSpinner />
        <DualRingSpinner color="primary" />
        <DualRingSpinner color="secondary" />
        <DualRingSpinner color="error" />
        <DualRingSpinner color="warning" />
        <DualRingSpinner color="info" />
        <DualRingSpinner color="success" />
      </section>
      <section>
        <CircleSpinner />
        <CircleSpinner color="primary" />
        <CircleSpinner color="secondary" />
        <CircleSpinner color="error" />
        <CircleSpinner color="warning" />
        <CircleSpinner color="info" />
        <CircleSpinner color="success" />
      </section>
    </>
  );
}

export default App;
