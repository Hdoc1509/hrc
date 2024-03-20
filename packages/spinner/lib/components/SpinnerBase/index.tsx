import clsx from "clsx";
import "./style.scss";

export type SpinnerProps = {
  color?: "primary" | "secondary" | "error" | "warning" | "info" | "success";
  size?: "small" | "large";
  speed?: "slow" | "fast";
  className?: string;
};

type Props = SpinnerProps & { name: string };

export const SpinnerBase = ({
  color,
  size,
  speed,
  className,
  children,
  name,
}: React.PropsWithChildren<Props>): JSX.Element => {
  const spinnerClass = clsx(
    ["spinner", name],
    {
      [`spinner--${color}`]: color,
      [`spinner--${size}`]: size,
      [`spinner--${speed}`]: speed,
    },
    className,
  );

  return <div className={spinnerClass}>{children}</div>;
};
