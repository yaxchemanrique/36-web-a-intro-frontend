import React from "react";

// rfce

/* function Saludo(props) {
  console.log(props)
  console.log(props.firstName)

 const divStyles = {
    background
    ...
  }

  return (
      <div style={{ background: "plum", marginBottom: "1rem" }}>
        Saludos, {props.firstName}
      </div>
    );
} */

function Saludo({ firstName = 'usuario', lastName }) {
  // const {firstName, lastName} = props;

  return (
    <div style={{ background: "plum", marginBottom: "1rem" }}>
      Saludos, {firstName} {lastName}
    </div>
  );
}

export default Saludo;
