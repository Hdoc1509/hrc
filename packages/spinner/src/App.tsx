import { Demo } from "./components/Demo";
import { BarsBounceSpinnerDemo } from "./components/BarsBounceSpinnerDemo";
import { BorderSpinnerDemo } from "./components/BorderSpinnerDemo";
import { CircleSpinnerDemo } from "./components/CircleSpinnerDemo";
import { DualRingSpinnerDemo } from "./components/DualRingSpinner";
import { GrowingSpinnerDemo } from "./components/GrowingSpinnerDemo";
import { HeartSpinnerDemo } from "./components/HeartSpinnerDemo";
import { RingSpinnerDemo } from "./components/RingSpinnerDemo";
import "./App.css";

function App() {
  return (
    <>
      <Demo />
      <BarsBounceSpinnerDemo />
      <BorderSpinnerDemo />
      <CircleSpinnerDemo />
      <DualRingSpinnerDemo />
      <GrowingSpinnerDemo />
      <HeartSpinnerDemo />
      <RingSpinnerDemo />
    </>
  );
}

export default App;
