# @hrc/input

<!-- markdownlint-disable MD033 -->
<div align="center">

[![version](https://img.shields.io/npm/v/%40hrc%2Finput)](https://www.npmjs.com/package/@hrc/input)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/%40hrc%2Finput)
![npm downloads](https://img.shields.io/npm/dm/%40hrc%2Finput)

</div>

Simple input components for your React app

## Installation

```bash
npm install @hrc/input
```

## Usage

```js
import { useState } from "react";
import { Input, Textarea, Checkbox, Radio, RadioGroup } from "@lib/main";
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
```

## Documentation

- [Package Documentation](https://hdoc1509.github.io/hrc/packages/input)
