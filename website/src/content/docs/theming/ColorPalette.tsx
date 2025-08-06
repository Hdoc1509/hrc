import "./ColorPalette.scss";

const colors = [
  "primary",
  "secondary",
  "error",
  "warning",
  "info",
  "success",
] as const;

type ColorVariants = (typeof colors)[number];
type Variants = "main" | "hover" | "text" | "transparent";

type VariantProps = { color: ColorVariants; variant: Variants };

const Variant = ({ color, variant }: VariantProps) => {
  return (
    <div
      className="color-palette__variant"
      data-variant={variant}
      data-color={color}
    >
      <div className="color-palette__color"></div>
      <div className="color-palette__info">
        <p>{variant}</p>
      </div>
    </div>
  );
};

export const ColorPalette = ({ color }: { color: ColorVariants }) => {
  return (
    <div className="color-palette">
      <Variant color={color} variant="main" />
      <Variant color={color} variant="hover" />
      <Variant color={color} variant="text" />
      <Variant color={color} variant="transparent" />
    </div>
  );
};
