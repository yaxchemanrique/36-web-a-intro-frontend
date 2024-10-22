import React from "react";

function App() {
  //! React.useState() -> [variable, funcion] == [count, setCount] == [name, setName]
  const initialCount = 50;
  const [count, setCount] = React.useState(initialCount);

  function handleClick(argumento) {
    // count = count + 1; * No se vale!
    // setCount(count + 1);
    // setCount(count + increment);

    switch (argumento) {
      case "reset": {
        const nextCount = initialCount;
        setCount(nextCount);
        window.alert(nextCount);
        break;
      }
      case "random": {
        let nextCount = Math.floor(Math.random() * 101);
        setCount(nextCount);
        window.alert(nextCount);
        break;
      }
      default:
        const nextCount = count + argumento;
        setCount(nextCount);
        window.alert(nextCount);
    }
  }
  /*
  function handleClick(increment){
    // count ++;
    setCount(count + increment);
  }

  function handleClickdecreas(decremento){
    // count ++;
    if((count-decremento) <= 0 ){
      setCount(0);
    }else{
      setCount(count-decremento);
    }
  }
  function handleClickreset(){
    setCount(initialCount);
  }
  function handleClickrRandom(min, max){
    setCount(Math.floor(Math.random() * (max - min + 1)) + min);
  }*/

  return (
    <React.Fragment>
      <></>
      <div>{count}</div>
      <br />
      {/* <button onClick={() => handleClick(1)}>Aumenta en 1</button>
      <button onClick={() => handleClick(10)}>Aumenta en 10</button>
      <button>Reiniciar</button>
      <button>Numero random (0-100)</button>
      <button>Disminuye en 10</button>
      <button>Disminuye en 1</button> */}

      <button onClick={() => handleClick(1)}>Aumenta en 1</button>
      <button onClick={() => handleClick(10)}>Aumenta en 10</button>
      <button onClick={() => handleClick("reset")}>Reiniciar</button>
      <button onClick={() => handleClick("random")}>Random</button>
      <button onClick={() => handleClick(-1)}>Disminuye en 1</button>
      <button onClick={() => handleClick(-10)}>Disminuye en 10</button>
      {/* <button onClick={()=>...} >Aumenta en 1</button> */}
    </React.Fragment>
  );
}

export default App;

/* function myFunction() {
  handleClick(1)
} */

//! Revisamos en 10 min
