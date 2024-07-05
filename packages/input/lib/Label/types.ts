import { Color } from "@hrc/type-utils";

export type LabelProps = {
  className?: string;
  error?: boolean;
  fullwidth?: boolean;
  checkbox?: boolean;
  radio?: boolean;
  row?: boolean;
  disabled?: boolean;
  color?: Color;
};
