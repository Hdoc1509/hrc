import { Button, ButtonGroup, ButtonIcon } from "@lib/main";
import { DeleteIcon, FavoriteIcon, SearchIcon } from "./Icons";
import { DemoDocs } from "./DemoDocs";

export const DemoComponentTitle = ({ name }: { name: string }) => {
  return <h2>&lt;{name} /&gt; Demo</h2>;
};

export const Demo = () => {
  return (
    <>
      <DemoDocs layout="row">
        <h2>Docs Demo</h2>
        <Button size="large" color="primary" iconEnd={<DeleteIcon />}>
          Delete
        </Button>
        <ButtonIcon color="error">
          <FavoriteIcon />
        </ButtonIcon>
        <ButtonGroup>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
          <ButtonIcon>
            <SearchIcon />
          </ButtonIcon>
        </ButtonGroup>
      </DemoDocs>
    </>
  );
};
