import { Button, type ButtonProps } from "../../lib/components/Button";

type Props = Pick<ButtonProps, "disabled" | "color">;

const Example = ({ disabled, color }: Props) => {
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

export const ColorExamples = ({ error }: { error: boolean }) => {
  return (
    <div className="button-examples">
      <Example disabled={error} />
      <Example disabled={error} color="primary" />
      <Example disabled={error} color="secondary" />
      <Example disabled={error} color="error" />
      <Example disabled={error} color="info" />
      <Example disabled={error} color="warning" />
      <div className="last-row">
        <Example disabled={error} color="success" />
      </div>
    </div>
  );
};
