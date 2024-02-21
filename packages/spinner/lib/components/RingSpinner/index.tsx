import { clsx } from "clsx";
import "./style.scss";

type Props = {
  size?: "small" | "large";
  speed?: "slow" | "fast";
  color?: "primary" | "secondary" | "error" | "warning" | "info" | "success";
  className?: string;
};

export const RingSpinner = ({
  size,
  speed,
  color,
  className,
}: Props): JSX.Element => {
  const spinnerClass = clsx(
    ["spinner", "ring-spinner"],
    {
      [`spinner--${size}`]: size,
      [`spinner--${color}`]: color,
      [`spinner--${speed}`]: speed,
    },
    className,
  );

  return (
    <div className={spinnerClass}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
