import { Button, type ButtonProps } from "../lib/components/Button";

type Props = Pick<ButtonProps, "disabled" | "color">;

export const ButtonExample = ({ disabled, color }: Props) => {
  return (
    <>
      <Button size="large" color={color} disabled={disabled} />
      <Button size="large" color={color} disabled={disabled} variant="outline">
        Outline
      </Button>
      <Button size="large" color={color} disabled={disabled} variant="text">
        Text
      </Button>
    </>
  );
};
