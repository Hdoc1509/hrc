import type { MaterialIcon as IconName } from "@material-design-icons/font";
import { clsx } from "clsx";
import "./Icon.scss";

export type IconProps = {
  variant?: "outlined" | "round" | "sharp" | "two-tone";
  size?: "small" | "large";
  name: IconName;
  color?: "primary" | "secondary" | "error" | "warning" | "info" | "success";
  className?: string;
  disabled?: boolean;
};

export const Icon = ({
  variant,
  size,
  name,
  color,
  className,
  disabled,
}: IconProps): JSX.Element => {
  const iconClass = clsx(
    variant == null ? "material-icons" : `material-icons-${variant}`,
    {
      [`material-icons--${size}`]: size,
      [`material-icons--${color}`]: color,
      ["material-icons--disabled"]: disabled,
    },
    className,
  );

  return <span className={iconClass}>{name}</span>;
};
