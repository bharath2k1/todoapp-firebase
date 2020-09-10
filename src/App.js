import React, { useState, useEffect } from "react";
import ListItems from "./ListItem";
import db from "./firebase";
import firebase from "firebase";

import "./App.css";
import { TextField, Button } from "@material-ui/core";

function App() {
  const [input, setinput] = useState("");
  const [item, setitem] = useState([]);

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setitem(snapshot.docs.map((doc) => doc.data().todo));
      });
  }, []);

  const onFormSubmit = (event) => {
    event.preventDefault();
    // setitem([...item, input]);
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
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
