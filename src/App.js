import React, { useState } from "react";
import Layout from "./Components/Layout";
import CardHeader from "./Components/CardHeader";
import Lists from "./Components/Lists";
import Form from "./Components/Form";

function App() {
  const [todo, setTodo] = useState("");
  console.log(todo);
  const delHandler = () => {
    console.log("delete");
  };
  const addHandler = () => {
    console.log("add");
  };
  return (
    <div className="col-12">
      <Layout>
        <CardHeader />
        <Form todo={todo} change={(e) => setTodo(e.target.value)} />
        <Lists del={delHandler} add={addHandler} />
      </Layout>
    </div>
  );
}

export default App;
