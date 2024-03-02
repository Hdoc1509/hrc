---
"@hdoc-react/input": minor
---

Rename css class selectors used by checkbox component

#### Migrating

If you were using css selectors, you should rename them as follows:

- `.chekbox-wrapper` -> `.checkbox`
- `.checkbox-wrapper--disabled` -> `.checkbox--disabled`
- `.checkbox-wrapper--primary` -> `.checkbox--primary`
- `.checkbox-wrapper--secondary` -> `.checkbox--secondary`
- `.checkbox-wrapper--error` -> `.checkbox--error`
- `.checkbox-wrapper--info` -> `.checkbox--info`
- `.checkbox-wrapper--warning` -> `.checkbox--warning`
- `.checkbox-wrapper--success` -> `.checkbox--success`
- `.checkbox-wrapper--small` -> `.checkbox--small`
- `.checkbox-wrapper--large` -> `.checkbox--large`
- `.checkbox-wrapper > input` -> `.checkbox__inner`
- `.checkbox-wrapper > .checkbox` -> `.checkbox__icon`
