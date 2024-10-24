import { useState } from "react";

function Input() {
  const [toDoTentativo, setToDoTentativo] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const id = crypto.randomUUID(); //Math.random()
    const newTodo = {
      id, //id: id
      content: toDoTentativo
    }
    const nextTodos = [...todos, newTodo];
    setTodos(nextTodos) // setTodos([...todos, newTodo])
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
