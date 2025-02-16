import React from "react";
import ListItem from "./ListItem";

function Lists({ del, add, todos }) {
  return (
    <div className="ListGroup">
      {todos &&
        todos.map((todo, index) => (
          <ListItem
            key={index}
            id={todo.id}
            title={todo.title}
            delHandler={del}
            addHandler={add}
            add = {todo.add}
            
          />
        ))}
    </div>
  );
}

export default Lists;
