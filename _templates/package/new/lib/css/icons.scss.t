---
to: packages/<%= name %>/lib/css/icon.scss
---

.<%= h.changeCase.param(name) %>-icon {
  position: absolute;

  inset-block: 0;
  margin: auto;

  --icon-color: #828282;

  &--start {
    left: 12px;
  }

  &--end {
    right: 12px;
  }
}
