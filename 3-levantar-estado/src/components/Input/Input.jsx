import { useState } from "react";

function Input({ todos, setTodos }) {
  const [toDoTentativo, setToDoTentativo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const id = crypto.randomUUID(); //Math.random()
    const newTodo = {
      id, //id: id
      content: toDoTentativo,
    };
    const nextTodos = [...todos, newTodo];
    console.log(nextTodos);
    setTodos(nextTodos); // setTodos([...todos, newTodo])
    setToDoTentativo("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={toDoTentativo}
        onChange={(e) => setToDoTentativo(e.target.value)}
      />
      <button>Confirmar</button>
    </form>
  );
}

export default Input;
