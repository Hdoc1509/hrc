import { useState } from "react";
import { Input, Textarea, Checkbox, Radio, RadioGroup } from "@hrc/input";
import { Icon } from "@hrc/material-icons";

export function PackageDemo() {
  const [hasNewsletter, setHasNewsletter] = useState(false);

  return (
    <>
      <Input
        label="Username"
        placeholder="John Doe"
        iconStart={<Icon name="people" />}
      />
      <Textarea label="Comment" placeholder="Hello world" color="secondary" />
      <Checkbox
        label="Receive newsletter"
        color="success"
        checked={hasNewsletter}
        onChange={(e) => setHasNewsletter(e.target.checked)}
      />
      <RadioGroup
        name="newsletter-frequency"
        defaultValue="weekly"
        disabled={!hasNewsletter}
      >
        <Radio label="Daily" value="daily" />
        <Radio label="Weekly" value="weekly" />
        <Radio label="Monthly" value="monthly" />
      </RadioGroup>
    </>
  );
}
