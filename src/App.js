import React, { useState } from "react";
import "./App.css";

function App() {
  const [copied, setCopied] = useState(false);

  function copy() {
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
  }
  return (
    <div className="app">
      <input type="text" name="name" />
      <input type="text" name="address" />
      <button onClick={copy}>{!copied ? "Copy link" : "Copied!"}</button>
    </div>
  );
}

export default App;
