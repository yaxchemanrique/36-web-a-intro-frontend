import React from "react";

function App2() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [isShown, setIsShown] = React.useState(false);
  // drone = dewey
  const droneOptions = [
    {
      value: "huey",
      label: "Drone Huey",
    },
    {
      value: "dewey",
      label: "Drone Dewey",
    },
    {
      value: "louie",
      label: "Drone Louie",
    },
  ];

  const [drone, setDrone] = React.useState(droneOptions[0].value);
  // const number = 10;


  const initialToppings = {
    pepperoni: true,
    carne: false,
    pollo: true,
    pina: false,
    jamon: true,
  };

  const [toppings, setToppings] = React.useState(initialToppings)

  const toppingsList = Object.keys(initialToppings);

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
        <legend>Selecciona los toppings par tu pizza</legend>

        {toppingsList.map((topping) => (
          <div>
            <input
              type="checkbox"
              id={topping}
              value={topping}
              checked={toppings[topping]}
              onChange={(event) => {
                const nextToppings = {...toppings, [topping]: event.target.checked}
                setToppings(nextToppings)
              }}
            />
            <label>{topping}</label>
          </div>
        ))}

        {JSON.stringify(toppings)}
      </fieldset>

      <hr />
      <fieldset>
        <legend>Quires ver ver más información?</legend>
        <input
          type="checkbox"
          id="more-info"
          checked={isShown}
          onChange={(e) => setIsShown(e.target.checked)}
        />
        <label htmlFor="more-info">Sí</label>
        <p>{isShown.toString()}</p>
      </fieldset>
      {isShown && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione vel,
          animi exercitationem voluptate omnis cum, atque illum pariatur dolorem
          saepe beatae suscipit mollitia earum consectetur optio quidem!
          Ratione, ipsa minima.
        </p>
      )}
      <hr />
      <fieldset>
        <legend>Select a maintenance drone:</legend>

        {droneOptions.map(({ value, label }) => (
          <div key={value}>
            <input
              type="radio"
              id={value}
              value={value}
              name="drone"
              checked={drone === value}
              onChange={(event) => setDrone(event.target.value)}
            />
            <label htmlFor={value}>{label}</label>
          </div>
        ))}

        {/* <div>
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
        </div> */}
      </fieldset>
      <p>{drone}</p>
      <button>Guardar</button>
    </form>
  );
}

export default App2;
