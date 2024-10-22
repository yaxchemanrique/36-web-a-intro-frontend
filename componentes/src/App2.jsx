import React from "react";
import EmployeeCard from "./components/EmployeeCard";


const data = [
  {
    id: "sunita-abc123",
    fullName: "Sunita Kumar",
    job: "Electrical Engineer",
    email: "sunita.kumar@acme.co",
  },
  {
    id: "henderson-def456",
    fullName: "Henderson G. Sterling II",
    job: "Receptionist",
    email: "henderson-the-second@acme.co",
  },
  {
    id: "aio-ghi789",
    fullName: "Aoi Kobayashi",
    job: "President",
    email: "kobayashi.aoi@acme.co",
  },
];

const elements = [
  <h1>Esto es un h1</h1>,
  <a href="#">Este es un link</a>,
  <button>Este es un boton</button>,
];
const names = [<p>Sunita Kumar</p>, <p>Henderson G. Sterling II</p>];
const cards = [
  <div>
    <h2>Sunita</h2>
    <dl>
      <dt>job:</dt>
      <dd>Electrical Engineer</dd>
    </dl>
    <dl>
      <dt>email:</dt>
      <dd>sunita.kumar@acme.co</dd>
    </dl>
  </div>,
  <div>
    <h2>Henderson G. Sterling II</h2>
    <dl>
      <dt>job:</dt>
      <dd>Receptionist</dd>
    </dl>
    <dl>
      <dt>email:</dt>
      <dd>henderson-the-second@acme.co</dd>
    </dl>
  </div>,
];

function App2() {
  return (
    <main>
      {/* {names} */}
      {/* {data.map((usuario) => { */}
      {data.map(({ id, fullName, job, email }, index) => {
        // console.log(usuario)
        return (
          <EmployeeCard key={id} fullName={fullName} job={job} email={email}/>
        );
      })}
    </main>
  );
}

export default App2;
