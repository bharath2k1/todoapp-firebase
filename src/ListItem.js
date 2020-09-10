import React from "react";
import { ListItem, ListItemText, List } from "@material-ui/core";

function ListItems({ item }) {
  return (
    <List>
      <ListItem>
        <ListItemText primary={item} />
      </ListItem>
    </List>
  );
}

export default ListItems;
