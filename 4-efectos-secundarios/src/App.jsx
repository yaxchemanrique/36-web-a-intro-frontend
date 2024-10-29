import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import TrackingMouse from "./TrackingMouse";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isTracking, setIsTracking] = useState(true)
  // const localStorage = window.localStorage...
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const localStorage = window.localStorage.getItem("is-dark-mode");
    return JSON.parse(localStorage) || false;
  });

  // useEffect(función, [arreglo de dependencias])
  // Sincronizar el HTML (especifico del navegador / fuera del alcance de react) con una variable de estado
  // Ejecutar algo al momento de carga/montar un componente
  useEffect(() => {
    document.title = `(${count}) - Proyecto Vite`;
  }, [count]);

  //debuggear
  // useEffect(()=> {
  //   console.log(count);
  // }, [count])

  //Hooks empiezan por USE -> custom hooks useToggle, useVisibilty

  // Consulta a upa api
  useEffect(() => {
    /* const response = await fetch(API del clima);
    const data = await response.json();
    ... */
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.style.setProperty("--clr", "#ffffffdd");
      document.documentElement.style.setProperty("--bg", "#242424");
      document.documentElement.style.setProperty("--hover-btn", "#535bf2");
      document.documentElement.style.setProperty("--bg-btn", "#1a1a1a");
    } else {
      document.documentElement.style.setProperty("--clr", "#213547");
      document.documentElement.style.setProperty("--bg", "#ffffff");
      document.documentElement.style.setProperty("--hover-btn", "#e174ff");
      document.documentElement.style.setProperty("--bg-btn", "#f9f9f9");
    }
  }, [isDarkMode]);

  useEffect(() => {
    window.localStorage.setItem("is-dark-mode", isDarkMode);
  }, [isDarkMode]);

  return (
    <>
      <input
        type="checkbox"
        id="darkmode"
        checked={isDarkMode}
        onChange={(e) => setIsDarkMode(e.target.checked)}
      />
      <label htmlFor="darkmode">
        Cambiar a {isDarkMode ? "modo claro" : "modo oscuro"}
      </label>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <input
        type="checkbox"
        id="mouse-tracking"
        checked={isTracking}
        onChange={(e) => setIsTracking(e.target.checked)}
      />
      <label htmlFor="mouse-tracking">
        Track Mouse Position
      </label>
      {isTracking && <TrackingMouse />}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
