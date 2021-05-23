import React from "react";
import { Link } from "react-router-dom";

const Header = ({ setShow, show }) => {
  return (
    <header>
      <Link to="/" id="home">
        <img alt="home_icon" src="../img/home.png"></img>
      </Link>
      <Link to="/character" id="character">
        <img
          alt="personajes"
          src="https://hack-girls-lat.herokuapp.com/img/avatars/girl_1_feliz.png"
        ></img>
      </Link>
      <Link to="/badges" className="timerLink">
        <img alt="Insigneas" src="../img/insignia.png" id="insignea"></img>
      </Link>
    </header>
  );
};

export default Header;
