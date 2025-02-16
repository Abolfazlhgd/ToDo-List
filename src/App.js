import React, { useState } from "react";
import Layout from "./Components/Layout";
import CardHeader from "./Components/CardHeader";
import Lists from "./Components/Lists";
import Form from "./Components/Form";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, { title: todo, add: false }]);
  };
  const delHandler = (todoId) => {
    if (window.confirm("Are you sure?")) {
      const updateTodos = todos.filter((item) => item.id !== todoId);
      setTodos(updateTodos);
    }
  };
  const addHandler = (todoId) => {
    const index = todos.findIndex((item) => item.id === todoId);
    const duplicateTodos = [...todos];

    duplicateTodos[index] = {
      id: todos[index].id,
      title: todos[index].title,
      add: !todos[index].add,
    };
    setTodos(duplicateTodos);
    console.log(todos);
  };
  return (
    <div className="col-12">
      <Layout>
        <CardHeader />
        <Form
          todo={todo}
          change={(e) => setTodo(e.target.value)}
          submit={submitHandler}
        />
        <Lists del={delHandler} add={addHandler} todos={todos} />
      </Layout>
    </div>
  );
}

export default App;
