import { Demo } from "./components/Demo";
import { RingSpinnerDemo } from "./components/RingSpinnerDemo";
import { BorderSpinnerDemo } from "./components/BorderSpinnerDemo";
import { DualRingSpinnerDemo } from "./components/DualRingSpinner";
import { CircleSpinnerDemo } from "./components/CircleSpinnerDemo";
import { GrowingSpinnerDemo } from "./components/GrowingSpinnerDemo";
import "./App.css";

function App() {
  return (
    <>
      <Demo />
      <RingSpinnerDemo />
      <BorderSpinnerDemo />
      <DualRingSpinnerDemo />
      <CircleSpinnerDemo />
      <GrowingSpinnerDemo />
    </>
  );
}

export default App;
