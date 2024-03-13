import { Icon } from "@hdoc-react/material-icons";
import { ButtonIcon } from "@lib/main";
import { DeleteIcon, SearchIcon } from "./Icons";
import { DemoDocs } from "./DemoDocs";

const ColorExample = (props: React.ComponentProps<typeof ButtonIcon>) => {
  return (
    <>
      <ButtonIcon {...props} />
      <ButtonIcon variant="outline" {...props} />
      <ButtonIcon variant="text" {...props} />
    </>
  );
};
export const ButtonIconDemo = () => {
  return (
    <DemoDocs>
      <DemoDocs.TitleComponent name="ButtonIcon" />
      <DemoDocs layout="row">
        <h3>Default</h3>
        <ColorExample>
          <Icon name="people" />
        </ColorExample>
        <ButtonIcon disabled>
          <Icon name="people" />
        </ButtonIcon>
      </DemoDocs>
      <DemoDocs layout="grid" cols={9}>
        <h3>Colors</h3>
        <ColorExample color="primary">
          <SearchIcon />
        </ColorExample>
        <ColorExample color="secondary">
          <Icon name="settings" />
        </ColorExample>
        <ColorExample color="error">
          <DeleteIcon />
        </ColorExample>
        <ColorExample color="info">
          <Icon name="map" />
        </ColorExample>
        <ColorExample color="warning">
          <Icon name="warning" />
        </ColorExample>
        <ColorExample color="success">
          <Icon name="check" />
        </ColorExample>
      </DemoDocs>
      <DemoDocs layout="row" className="button--info">
        <h3>Sizes</h3>
        <ButtonIcon size="small">
          <Icon name="air" />
        </ButtonIcon>
        <ButtonIcon>
          <Icon name="air" />
        </ButtonIcon>
        <ButtonIcon size="large">
          <Icon name="air" />
        </ButtonIcon>
      </DemoDocs>
      <DemoDocs layout="grid" cols={5} className="button--success">
        <h3>Rounded</h3>
        <ButtonIcon roundedSide="top">
          <Icon name="adb" />
        </ButtonIcon>
        <ButtonIcon roundedSide="bottom">
          <Icon name="adb" />
        </ButtonIcon>
        <ButtonIcon roundedSide="left">
          <Icon name="adb" />
        </ButtonIcon>
        <ButtonIcon roundedSide="right">
          <Icon name="adb" />
        </ButtonIcon>
        <ButtonIcon fullRounded>
          <Icon name="adb" />
        </ButtonIcon>
      </DemoDocs>
    </DemoDocs>
  );
};
