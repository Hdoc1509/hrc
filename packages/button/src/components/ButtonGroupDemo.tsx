import { Icon } from "@hdoc-react/material-icons";
import { Button, ButtonGroup, ButtonIcon } from "../../lib/main";
import { DivideIcon, CloseIcon } from "./Icons";
import { DemoDocs } from "./DemoDocs";

const IconExample = () => {
  return (
    <>
      <ButtonIcon>
        <Icon name="add" />
      </ButtonIcon>
      <ButtonIcon>
        <Icon name="remove" />
      </ButtonIcon>
      <ButtonIcon>
        <DivideIcon />
      </ButtonIcon>
      <ButtonIcon>
        <CloseIcon />
      </ButtonIcon>
      <Button>Clear</Button>
    </>
  );
};

const GroupExample = () => {
  return (
    <>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
      <Button>Four</Button>
    </>
  );
};

const ColorExample = (props: React.ComponentProps<typeof ButtonGroup>) => {
  return (
    <>
      <ButtonGroup {...props}>
        <GroupExample />
      </ButtonGroup>
      <ButtonGroup variant="outline" {...props}>
        <GroupExample />
      </ButtonGroup>
      <ButtonGroup variant="text" {...props}>
        <GroupExample />
      </ButtonGroup>
    </>
  );
};
export const ButtonGroupDemo = () => {
  return (
    <DemoDocs>
      <DemoDocs.TitleComponent name="ButtonGroup" />
      <DemoDocs layout="row">
        <h3>Default</h3>
        <ColorExample />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Colors</h3>
        <ColorExample color="primary" />
        <ColorExample color="secondary" />
        <ColorExample color="error" />
        <ColorExample color="info" />
        <ColorExample color="warning" />
        <ColorExample color="success" />
      </DemoDocs>
      <DemoDocs layout="row" className="button--primary">
        <h3>Sizes</h3>
        <ButtonGroup size="small">
          <GroupExample />
        </ButtonGroup>
        <ButtonGroup>
          <GroupExample />
        </ButtonGroup>
        <ButtonGroup size="large">
          <GroupExample />
        </ButtonGroup>
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>Column</h3>
        <ColorExample direction="column" color="secondary" />
        <ColorExample direction="column" color="error" />
        <ColorExample direction="column" color="warning" />
      </DemoDocs>
      <DemoDocs layout="row">
        <h3>With icons</h3>
        <ButtonGroup color="success">
          <IconExample />
        </ButtonGroup>
        <ButtonGroup color="success" variant="outline">
          <IconExample />
        </ButtonGroup>
        <ButtonGroup color="success" variant="text">
          <IconExample />
        </ButtonGroup>
      </DemoDocs>
    </DemoDocs>
  );
};
