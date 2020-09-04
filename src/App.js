import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mon compte mobilité</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mon Compte Mobilité est une expérimentation d’intérêt général pour
          l’optimisation des mobilités et des services de déplacements
          subventionnés sur des territoires, afin de les rendre plus durables.
          Elle s’adresse aux citoyen.ne.s, aux entreprises, aux collectivités et
          aux opérateurs de mobilités.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
