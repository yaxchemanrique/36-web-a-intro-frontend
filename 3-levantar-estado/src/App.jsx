import { useState } from "react";
import Input from "./components/Input/Input.jsx";
import ToDoContainer from "./components/ToDoContainer/ToDoContainer.jsx";
import './styles.css';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <Input todos={todos} setTodos={setTodos} />
      <ToDoContainer todos={todos}/>
    </div>
  );
}

export default App;

/* const todos = [
  {
    id: 1,
    content: 'elemento1'
  },
  {
    id: 2,
    content: 'elemento2'
  }
] */
