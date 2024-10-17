import React from "react";

// rfce

function Saludo(props) {
  console.log(props)
  console.log(props.firstName)

  return (
      <div style={{ background: "plum", marginBottom: "1rem" }}>
        Saludos, {props.firstName}
      </div>
    );
}

export default Saludo;
