import { MaterialIcon } from "@material-design-icons/font";
import { clsx } from "clsx";
import "./Icon.scss";

export type IconProps = {
  variant?: "outlined" | "round" | "sharp" | "two-tone";
  size?: "small" | "large";
  name: MaterialIcon;
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
    variant ? `material-icons-${variant}` : "material-icons",
    {
      [`material-icons--${size}`]: size,
      [`material-icons--${color}`]: color,
      "material-icons--disabled": disabled,
    },
    className,
  );

  return (
    <span className={iconClass} aria-hidden="true">
      {name}
    </span>
  );
};
