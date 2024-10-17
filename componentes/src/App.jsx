import React from "react";
import Saludo from "./components/Saludo.jsx"
import Button from "./components/Button.jsx";

function App() {
  return (
    <>
      <header>
        <nav style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Logo</p>
          <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Acerca de nosotros</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {/* <Saludo hola='este el el prop hola' adios='este es el prop adios'></Saludo> */}
        <Button>
          El texto entre mis dos etiquetas
        </Button>

        <Button>Iniciar sesion</Button>
        <Button>
          <code>Log in</code>
          <span>Hola!</span>
        </Button>

        <Button>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, tempore dolore aliquid aspernatur natus eum ipsum sapiente autem. Beatae, molestiae deserunt. Omnis eligendi quos enim voluptates molestiae officiis amet ab
        </Button>
        
        <Saludo></Saludo>
        <Saludo firstName='Yaxche' lastName='Manrique'></Saludo>
        <Saludo firstName='Alejandro'/>
        <Saludo firstName='Aurelio'/>
        <Saludo firstName='Carlos'/>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, tempore
          dolore aliquid aspernatur natus eum ipsum sapiente autem. Beatae,
          molestiae deserunt. Omnis eligendi quos enim voluptates molestiae
          officiis amet ab.
        </p>
      </main>
    </>
  );
}

export default App;
