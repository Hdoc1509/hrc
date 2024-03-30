import { Button } from "@hrc/button";
import { Icon } from "@hrc/material-icons";

export function ButtonWithIcons() {
  return (
    <>
      <Button color="error" iconStart={<Icon name="delete" />}>
        Delete
      </Button>
      <Button color="error" iconEnd={<Icon name="delete" />}>
        Delete
      </Button>
      <Button color="error" variant="outline" iconStart={<Icon name="close" />}>
        Close
      </Button>
      <Button color="error" variant="outline" iconEnd={<Icon name="close" />}>
        Close
      </Button>
      <Button color="error" variant="text" iconStart={<Icon name="favorite" />}>
        Favorite
      </Button>
      <Button color="error" variant="text" iconEnd={<Icon name="favorite" />}>
        Favorite
      </Button>
    </>
  );
}
