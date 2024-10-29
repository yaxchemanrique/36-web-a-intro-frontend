import React from "react";
import styles from "./ToDo.module.css";

function ToDo({ isActive=false, children }) {
  console.log(styles);

  return (
    // <li className='todo'>{children}</li>
    <li className={`${styles.todo} ${isActive ? styles.active : ""}`}>
      {children}
    </li>
  );
}

export default ToDo;
