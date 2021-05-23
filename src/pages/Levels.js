import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import api from "../activities-api";

export default class Levels extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: null, isLoading: true };
  }

  async componentDidMount() {
    var levels;
    try {
      levels = await api.getLatest();
      console.log(levels[0].activities[0].backgrounds[0]);
    } catch (e) {
      console.error(e);
      levels = null;
    }
    this.setState({ levels, isLoading: false });
  }

  render() {
    const { levels, isLoading } = this.state;

    if (isLoading) {
      return <div className="message">Cargando...</div>;
    }

    return (
      <div>
        <Helmet>
          <title>Hack </title>
        </Helmet>

        <div className="levels">
          <Link to="dialog/1" className="level" key={1}>
            {/* <span className='bg' style={{ backgroundImage: `url(${level.thumbnail})` }}></span> */}
            <span
              className="info"
              style={{
                backgroundImage: `url(${levels[0].activities[0].backgrounds[0]})`,
                backgroundSize: "contain",
              }}
            >
              <h2 style={{ color: "black" }}>Actividad 1</h2>
            </span>
          </Link>
          <Link to="dialog/2" className="level" key={1}>
            {/* <span className='bg' style={{ backgroundImage: `url(${level.thumbnail})` }}></span> */}
            <span
              className="info"
              style={{
                backgroundImage: `url(${levels[0].activities[1].backgrounds[1]})`,
                backgroundSize: "contain",
              }}
            >
              <h2 style={{ color: "black" }}>Actividad 2</h2>
            </span>
          </Link>
          <Link to="dialog/3" className="level" key={1}>
            {/* <span className='bg' style={{ backgroundImage: `url(${level.thumbnail})` }}></span> */}
            <span
              className="info"
              style={{
                backgroundImage: `url(${levels[0].activities[0].backgrounds[2]})`,
                backgroundSize: "contain",
                filter: "grayscale(1)",
              }}
            >
              <h2 style={{ color: "black" }}>Actividad 3</h2>
            </span>
          </Link>
        </div>
      </div>
    );
  }
}
