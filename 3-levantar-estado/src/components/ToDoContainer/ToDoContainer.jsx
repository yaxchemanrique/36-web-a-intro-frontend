import React from "react";
import ToDo from "../ToDo/ToDo";

function ToDoContainer({ todos }) {
  return (
    <ul>
      {todos.map((todo)=> (
        <ToDo key={todo.id}>{todo.content}</ToDo>
      ))}
    </ul>
  );
}

export default ToDoContainer;
