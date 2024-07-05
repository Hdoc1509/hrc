import { Checkbox } from "@hrc/input";
import { Icon } from "@hrc/material-icons";

export function CheckboxIcon() {
  return (
    <>
      <Checkbox
        icon={<Icon name="thumb_up" variant="outlined" />}
        iconChecked={<Icon name="thumb_up" />}
      />
      <Checkbox
        icon={<Icon name="bookmark_border" />}
        iconChecked={<Icon name="bookmark" />}
      />
    </>
  );
}
