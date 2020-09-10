import React, { useState } from "react";
import ListItems from "./ListItem";

import "./App.css";
import { TextField, Button } from "@material-ui/core";

function App() {
  const [input, setinput] = useState("");
  const [item, setitem] = useState(["I'm bharath simha reddy"]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    setitem([...item, input]);
    setinput("");
  };

  return (
    <div className="App">
      <h1>React todo app with firebase</h1>
      <form onSubmit={onFormSubmit}>
        <TextField
          value={input}
          onChange={(e) => setinput(e.target.value)}
          id="standard-basic"
          label="write a todo"
        />

        <Button
          disabled={!input}
          type="submit"
          variant="contained"
          color="primary"
        >
          ADD
        </Button>
      </form>
      <div>
        {item.map((items) => (
          <ListItems item={items} />
        ))}
      </div>
    </div>
  );
}

export default App;
