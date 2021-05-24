import React from "react";
import { Link } from "react-router-dom";

const InitialPage = () => {
  return (
    <div className="divInicial">
      <img src="../../img/logo_nombre.png" id="logo"></img>

      <img src="../../img/thumbnail_characters.png" id="logo"></img>
      <Link to="/app">
        <button id="buttonStart">EMPEZAR A JUGAR</button>
      </Link>
    </div>
  );
};

export default InitialPage;
