---
to: packages/<%= name %>/src/App.tsx
---
<%
  ComponentName = h.changeCase.title(name)
  ComponentKebab = h.changeCase.param(name)
-%>
import { useState } from "react";
import { <%= ComponentName %> } from "../lib/main";
import "./App.css";

function App() {
  const [error, setError] = useState(false);

  const toggleError = () => setError(!error);

  return (
    <>
      <button onClick={toggleError}>toggle error</button>
      <<%= ComponentName %> disabled={error} />
    </>
  );
}

export default App;
