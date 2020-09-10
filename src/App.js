import React, { useState, useEffect } from "react";
import ListItems from "./ListItem";
import db from "./firebase";
import firebase from "firebase";

import "./App.css";
import { TextField, Button, Container } from "@material-ui/core";

function App() {
  const [input, setinput] = useState("");
  const [items, setitem] = useState([]);

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setitem(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
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
      <form onSubmit={onFormSubmit} style={{ paddingBottom: "15px" }}>
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
          ADD TO LIST
        </Button>
      </form>
      <Container maxWidth="sm">
        {items.map((item) => (
          <ListItems items={item} />
        ))}
      </Container>
    </div>
  );
}

export default App;
