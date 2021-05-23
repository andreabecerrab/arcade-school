import React, { Fragment, useEffect, useState } from "react";
import api from "../../../activities-api";
import { useHistory, Link } from "react-router-dom";

export default class Achievement extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {}
  render() {
    return (
      <div class="achievement">
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

export default Achievement;