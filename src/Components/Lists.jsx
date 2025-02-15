import React from "react";
import ListItem from "./ListItem";

function Lists({del , add}) {
  
  return (
    <div className="ListGroup">
      <ListItem title='test 1' delHandler={del} addHandler={add} />
    </div>
  );
}

export default Lists;
