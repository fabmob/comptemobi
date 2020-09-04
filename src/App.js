import React from "react";
import "./App.css";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header>
        <img alt="logo" src={logo} id="logo" />
        <h1>compte.mobi</h1>
      </header>
      <main>
        <p>
          Mon Compte Mobilité est une expérimentation d’intérêt général pour
          l’optimisation des mobilités et des services de déplacements
          subventionnés sur des territoires, afin de les rendre plus durables.
          Elle s’adresse aux citoyen.ne.s, aux entreprises, aux collectivités et
          aux opérateurs de mobilités.
        </p>
        <img
          alt="Rennes"
          id="illustration"
          src="https://images.unsplash.com/photo-1443684015721-b4dde0c25c72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1490&q=80"
        />
        <a className="button" href="mailto:contact@lafabriquedesmobilites.fr">
          Je suis intéressé
        </a>
      </main>
      <footer>
        <img
          alt="logo fabmob"
          src="http://lafabriquedesmobilites.fr/wp-content/themes/fabmob/images/fabmob-logo.svg"
        />
        <img
          alt="logo capgemini"
          src="https://www.capgemini.com/fr-fr/wp-content/themes/capgemini-komposite/assets/images/capgemini-invent.svg"
        />
      </footer>
    </div>
  );
}

export default App;
