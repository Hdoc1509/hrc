import { Demo } from "./components/Demo";
import { BorderSpinnerDemo } from "./components/BorderSpinnerDemo";
import { CircleSpinnerDemo } from "./components/CircleSpinnerDemo";
import { DualRingSpinnerDemo } from "./components/DualRingSpinner";
import { GrowingSpinnerDemo } from "./components/GrowingSpinnerDemo";
import { RingSpinnerDemo } from "./components/RingSpinnerDemo";
import "./App.css";

function App() {
  return (
    <>
      <Demo />
      <BorderSpinnerDemo />
      <CircleSpinnerDemo />
      <DualRingSpinnerDemo />
      <GrowingSpinnerDemo />
      <RingSpinnerDemo />
    </>
  );
}

export default App;
