import React, { useState } from "react";
import ListItem from "./ListItem";

import "./App.css";

function App() {
  const [input, setinput] = useState("");
  const [item, setitem] = useState(["I'm bharath simha reddy"]);
  const onButtonSubmit = () => {
    setitem([...item, input]);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    setinput("");
  };

  return (
    <div className="App">
      <h1>React todo app with firebase</h1>
      <form onSubmit={onFormSubmit}>
        <input value={input} onChange={(e) => setinput(e.target.value)} />
        <button disabled={!input} onClick={onButtonSubmit}>
          ADD
        </button>
      </form>

      <div>
        <ListItem item={item} />
      </div>
    </div>
  );
}

export default App;
