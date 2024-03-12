import { Icon } from "@hdoc-react/material-icons";
import { Button } from "../../lib/main";
import { CloseIcon, DeleteIcon, FavoriteIcon } from "./Icons";
import { DemoDocs } from "./DemoDocs";

const ColorExample = (props: React.ComponentProps<typeof Button>) => {
  return (
    <>
      <Button {...props} />
      <Button variant="outline" {...props}>
        Outline
      </Button>
      <Button variant="text" {...props}>
        Text
      </Button>
    </>
  );
};

export const ButtonDemo = () => {
  return (
    <DemoDocs>
      <DemoDocs.TitleComponent name="Button" />
      <DemoDocs layout="grid" cols={4}>
        <h3>Default</h3>
        <ColorExample />
        <Button disabled>Disabled</Button>
      </DemoDocs>
      <DemoDocs layout="grid">
        <h3>Colors</h3>
        <ColorExample color="primary">Primary</ColorExample>
        <ColorExample color="secondary">Secondary</ColorExample>
        <ColorExample color="error">Error</ColorExample>
        <ColorExample color="info">Info</ColorExample>
        <ColorExample color="warning">Warning</ColorExample>
        <ColorExample color="success">Succes</ColorExample>
      </DemoDocs>
      <DemoDocs layout="row" className="button--primary">
        <h3>Sizes</h3>
        <Button size="small">Small</Button>
        <Button />
        <Button size="large">Large</Button>
      </DemoDocs>
      <DemoDocs layout="grid" cols={5} className="button--secondary">
        <h3>Rounded</h3>
        <Button roundedSide="top">Top rounded</Button>
        <Button roundedSide="bottom">Bottom rounded</Button>
        <Button roundedSide="left">Left rounded</Button>
        <Button roundedSide="right">Right rounded</Button>
        <Button fullRounded>Full rounded</Button>
      </DemoDocs>
      <DemoDocs layout="grid" className="button--error">
        <h3>With icons</h3>
        <Button iconStart={<Icon name="delete" />}>Delete</Button>
        <Button iconEnd={<DeleteIcon />}>Delete</Button>
        <Button iconStart={<Icon name="close" />} variant="outline">
          Close
        </Button>
        <Button iconEnd={<CloseIcon />} variant="outline">
          Close
        </Button>
        <Button iconStart={<Icon name="favorite" />} variant="text">
          Favorite
        </Button>
        <Button iconEnd={<FavoriteIcon />} variant="text">
          Favorite
        </Button>
      </DemoDocs>
    </DemoDocs>
  );
};
