import React from "react";
import { Link } from "react-router-dom";

export default class Achievement extends React.Component {
  async componentDidMount() {}
  render() {
    return (
      <div class="achievement" style={{ paddingTop: "10vh" }}>
        <img
          class="medal"
          src="../../../../img/badge_amistad.png"
          alt="medalla"
        ></img>
        <div class="dialog">
          <p>{this.props.frase}</p>
        </div>
        <Link to="/level/1">
          <button id="nextActivity">Siguiente Actividad</button>
        </Link>
      </div>
    );
  }
}
