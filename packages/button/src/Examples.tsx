import { Button } from "../lib/main";
import { ButtonProps } from "../lib/types";

type Props = Pick<ButtonProps, "disabled" | "color">;

export const ButtonExample = ({ disabled, color }: Props) => {
  return (
    <>
      <Button size="large" color={color} disabled={disabled} />
      <Button
        size="large"
        color={color}
        disabled={disabled}
        variant="outline"
      />
      <Button size="large" color={color} disabled={disabled} variant="text" />
    </>
  );
};
