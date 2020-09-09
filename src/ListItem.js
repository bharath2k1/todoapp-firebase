import React from "react";

function ListItem({ item }) {
  return (
    <div>
      <ul>
        {item.map((items) => (
          <li>{items}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListItem;
