import React from "react";
import ListItem from "./ListItem";

function Lists({ del, add, todos }) {
  if (todos.length <= 0) {
    return (
      <div className="bg-sky-200 rounded-sm mx-auto flex justify-center mt-3">
        <p className="text-black/80 flex font-mono font-bold text-lg">
          Nothing To Do!
        </p>
      </div>
    );
  }
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
            add={todo.add}
          />
        ))}
    </div>
  );
}

export default Lists;
