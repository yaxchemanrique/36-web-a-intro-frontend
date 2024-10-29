import React from "react";
import ToDo from "../ToDo/ToDo";
import styles from "./ToDoContainer.module.css";

function ToDoContainer({ todos }) {
  return (
    <ul className={styles.container}>
      {todos.map((todo, i) => {
        if (i === 1)
          return (
            <ToDo isActive={true} key={todo.id}>
              {todo.content}
            </ToDo>
          );
          
        return <ToDo key={todo.id}>{todo.content}</ToDo>;
      })}
    </ul>
  );
}

export default ToDoContainer;
