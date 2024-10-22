import React from "react";

function App2() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [drone, setDrone] = React.useState("louie");
  // drone = dewey
  return (
    <form>
      <fieldset>
        <label htmlFor="name">Nombre</label>
        <br />
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </fieldset>
      <hr />
      <fieldset>
        <legend>Select a maintenance drone:</legend>

        <div>
          <input
            type="radio"
            id="huey"
            value="huey"
            name="drone"
            checked={drone === "huey"}
            onChange={(event) => setDrone(event.target.value)}
          />
          <label htmlFor="huey">Huey</label>
        </div>

        <div>
          <input
            type="radio"
            id="dewey"
            value="dewey"
            name="drone"
            checked={drone === "dewey"}
            onChange={(event) => setDrone(event.target.value)}
          />
          <label htmlFor="dewey">Dewey</label>
        </div>

        <div>
          <input
            type="radio"
            id="louie"
            value="louie"
            name="drone"
            checked={drone === "louie"}
            onChange={(event) => setDrone(event.target.value)}
          />
          <label htmlFor="louie">Louie</label>
        </div>
      </fieldset>
      <p>{drone}</p>
      <button>Guardar</button>
    </form>
  );
}

export default App2;
