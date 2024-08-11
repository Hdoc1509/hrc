import { Demo } from "./components/Demo";
import { BarsBounceSpinnerDemo } from "./components/BarsBounceSpinnerDemo";
import { BarsBounce2SpinnerDemo } from "./components/BarsBounce2SpinnerDemo";
import { BorderSpinnerDemo } from "./components/BorderSpinnerDemo";
import { CircleSpinnerDemo } from "./components/CircleSpinnerDemo";
import { DualRingSpinnerDemo } from "./components/DualRingSpinner";
import { EllipsisSpinnerDemo } from "./components/EllipsisSpinnerDemo";
import { GrowingSpinnerDemo } from "./components/GrowingSpinnerDemo";
import { HeartSpinnerDemo } from "./components/HeartSpinnerDemo";
import { RingSpinnerDemo } from "./components/RingSpinnerDemo";
import { RollerSpinnerDemo } from "./components/RollerSpinnerDemo";
import "./App.css";

function App() {
  return (
    <>
      <Demo />
      <BarsBounceSpinnerDemo />
      <BarsBounce2SpinnerDemo />
      <BorderSpinnerDemo />
      <CircleSpinnerDemo />
      <DualRingSpinnerDemo />
      <EllipsisSpinnerDemo />
      <GrowingSpinnerDemo />
      <HeartSpinnerDemo />
      <RingSpinnerDemo />
      <RollerSpinnerDemo />
    </>
  );
}

export default App;
