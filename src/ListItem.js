import React from "react";
import {
  ListItem,
  ListItemText,
  List,
  ListItemAvatar,
} from "@material-ui/core";

function ListItems({ item }) {
  return (
    <List>
      <ListItem>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText primary={item} />
      </ListItem>
    </List>
  );
}

export default ListItems;
