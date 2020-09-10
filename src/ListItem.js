import React from "react";
import {
  ListItem,
  ListItemText,
  List,
  Button,
  Divider,
  makeStyles,
} from "@material-ui/core";
import db from "./firebase";
import "./ListItems.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItems({ items }) {
  const classes = useStyles();

  return (
    <List
      component="nav"
      aria-label="mailbox folders"
      className="list-items"
      className={classes.root}
    >
      <ListItem button>
        <ListItemText primary={items.todo} />

        <Button
          onClick={(event) => db.collection("todos").doc(items.id).delete()}
          color="secondary"
          variant="contained"
        >
          DELETE
        </Button>
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}

export default ListItems;
