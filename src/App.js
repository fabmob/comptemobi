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
          Mon Compte Mobilité permet aux territoires et aux entreprises de
          concevoir leur politique de subvention des mobilités plus efficaces et
          durables.{" "}
        </p>
        <p>
          Il permet aux citoyens de faire une demande en trois clics pour
          redécouvrir les transports de sa ville.{" "}
          <a href="https://cloud.fabmob.io/s/FqWd2SaXKEjSTRg#pdfviewer">
            {" "}
            En savoir plus (PDF)
          </a>
          .
        </p>

        <img
          alt="Rennes"
          id="illustration"
          src="https://images.unsplash.com/photo-1443684015721-b4dde0c25c72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1490&q=80"
        />
        <a
          className="button"
          href="https://forum.fabmob.io/c/mon-compte-mobilite"
        >
          Poser des questions sur notre forum
        </a>
        <a className="button" href="mailto:contact@lafabriquedesmobilites.fr">
          Nous contacter directement
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
