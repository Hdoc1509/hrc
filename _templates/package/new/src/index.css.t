---
to: packages/<%= name %>/src/index.css
---

:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

[data-theme='light'] {
  --color-bg: #fff;
  --color-text: #000;
}

[data-theme="dark"] {
  --color-bg: #242424;
  --color-text: #fff;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;

  background-color: var(--color-bg);
  color: var(--color-text);
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}
