---
to: packages/<%= name %>/src/App.tsx
---
<%
  ComponentName = h.changeCase.title(name)
  ComponentKebab = h.changeCase.param(name)
-%>
import "./App.css";
import { <%= ComponentName %> } from "../lib/main";
import { useState } from "react";

function App() {
  const [error, setError] = useState(false);

  const toggleError = () => setError(!error);

  return (
    <>
      <button onClick={toggleError}>toggle error</button>
      <div className="<%= ComponentKebab %>-container">
        <<%= ComponentName %> color="secondary" size="large" />
      </div>
      <div className="my-container-with-custom-color">
        <<%= ComponentName %>
          size="large"
          color="primary"
          disabled={error}
        />
      </div>
    </>
  );
}

export default App;
