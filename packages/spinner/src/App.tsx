/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  BorderSpinner,
  CircleSpinner,
  DualRingSpinner,
  GrowingSpinner,
  RingSpinner,
} from "@lib/main";
import { Demo } from "./components/Demo";
import { SpinnerDemo } from "./components/SpinnerDemo";
import "./App.css";

function App() {
  return (
    <>
      <Demo />
      <SpinnerDemo
        spinner={RingSpinner}
        sizesColor="primary"
        speedsColor="secondary"
      />
      <SpinnerDemo
        spinner={BorderSpinner}
        sizesColor="error"
        speedsColor="warning"
      />
      <SpinnerDemo
        spinner={DualRingSpinner}
        sizesColor="info"
        speedsColor="success"
      />
      <SpinnerDemo
        spinner={CircleSpinner}
        sizesColor="primary"
        speedsColor="secondary"
      />
      <SpinnerDemo
        spinner={GrowingSpinner}
        sizesColor="error"
        speedsColor="warning"
      />
    </>
  );
}

export default App;
