import React from "react";

function App() {
  //! React.useState() -> [variable, funcion] == [count, setCount] == [name, setName]
  const initialCount = 10;
  const [count, setCount] = React.useState(initialCount);

  function handleClick(increment) {
    // count = count + 1; * No se vale!
    // setCount(count + 1);
    setCount(count + increment);
  }

  return (
    <React.Fragment>
      <></>
      <div>{count}</div>
      <br/>
      <button onClick={() => handleClick(1)} >Aumenta en 1</button>
      <button onClick={() => handleClick(10)} >Aumenta en 10</button>
      {/* <button onClick={()=>...} >Aumenta en 1</button> */}
    </React.Fragment>
  );
}

export default App;

/* function myFunction() {
  handleClick(1)
} */


